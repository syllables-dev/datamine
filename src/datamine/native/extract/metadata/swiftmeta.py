import struct

extension_kind = 1
anonymous_kind = 2
module_kind = 0
enum_kind = 18
getter_requirement = 3


class SwiftMetadata:
    def __init__(self, memory, image):
        self.memory = memory
        self.image = image
        self.names = {}

    def resolve(self, target):
        if isinstance(target, tuple) and target[0] == "ptr":
            return self.memory.load_pointer(target[1])
        return target

    def context_name(self, address, depth=0):
        if address is None or isinstance(address, tuple) or depth > 12:
            return address[1] if isinstance(address, tuple) else "?"
        if address in self.names:
            return self.names[address]
        flags = self.memory.u32(address)
        if flags is None:
            return "?"
        kind = flags & 0x1F
        parent = self.resolve(self.memory.relative_indirect(address + 4))
        if kind == extension_kind:
            own = "extension"
            extended = self.memory.relative(address + 8)
            mangled = self.memory.read(extended, 64) if extended else b""
            pointer = self.symbolic_reference(extended) if mangled and mangled[0] in (1, 2) else None
            if pointer:
                self.names[address] = self.context_name(pointer, depth + 1)
                return self.names[address]
        elif kind == anonymous_kind:
            self.names[address] = self.context_name(parent, depth + 1) if parent else "?"
            return self.names[address]
        else:
            name_address = self.memory.relative(address + 8)
            own = self.memory.cstring(name_address, 256) if name_address else "?"
        if parent and kind != module_kind:
            self.names[address] = f"{self.context_name(parent, depth + 1)}.{own}"
        else:
            self.names[address] = own
        return self.names[address]

    def symbolic_reference(self, address):
        data = self.memory.read(address, 5)
        if not data or len(data) < 5:
            return None
        kind = data[0]
        target = address + 1 + struct.unpack_from("<i", data, 1)[0]
        if kind == 1:
            return target
        if kind == 2:
            return self.memory.load_pointer(target)
        return None

    def enum_cases(self, descriptor):
        flags = self.memory.u32(descriptor)
        if flags is None or flags & 0x1F != enum_kind:
            return None
        payload_cases = self.memory.u32(descriptor + 20) & 0xFFFFFF
        empty_cases = self.memory.u32(descriptor + 24)
        return payload_cases, empty_cases, self.field_names(descriptor)

    def field_names(self, descriptor):
        fields = self.memory.relative(descriptor + 16)
        if not fields or fields == descriptor + 16:
            return []
        header = self.memory.read(fields, 16)
        if not header or len(header) < 16:
            return []
        _, _, _, record_size, count = struct.unpack("<iiHHI", header)
        names = []
        for index in range(min(count, 512)):
            name = self.memory.relative(fields + 16 + index * record_size + 8)
            names.append(self.memory.cstring(name, 256) if name else "?")
        return names

    def protocol_requirements(self, protocol):
        data = self.memory.read(protocol, 24)
        if not data or len(data) < 24:
            return None
        _, _, _, signature_count, requirement_count, _ = struct.unpack("<IiiIIi", data)
        start = protocol + 24 + signature_count * 12
        return start, [self.memory.u32(start + index * 8) for index in range(requirement_count)]

    def conformances(self):
        start, size = self.image.section("__TEXT.__swift5_proto")
        for entry in range(start, start + size, 4):
            descriptor = self.memory.relative(entry)
            if descriptor is None:
                continue
            record = self.conformance(descriptor)
            if record:
                yield record

    def conformance(self, descriptor):
        data = self.memory.read(descriptor, 16)
        if not data or len(data) < 16:
            return None
        flags = struct.unpack_from("<I", data, 12)[0]
        protocol = self.resolve(self.memory.relative_indirect(descriptor))
        type_reference_kind = (flags >> 3) & 7
        type_reference = self.memory.relative(descriptor + 4)
        if type_reference_kind == 1:
            type_reference = self.memory.load_pointer(type_reference)
        elif type_reference_kind in (2, 3):
            return None
        return {
            "protocol": protocol,
            "protocol_name": self.protocol_name(protocol),
            "type": type_reference,
            "type_name": self.context_name(type_reference),
            "witnesses": self.witnesses(descriptor, flags),
        }

    def protocol_name(self, protocol):
        if isinstance(protocol, int):
            return self.context_name(protocol)
        return protocol[1] if isinstance(protocol, tuple) else "?"

    def witnesses(self, descriptor, flags):
        cursor = descriptor + 16
        if flags & 0x40:
            cursor += 4
        cursor += ((flags >> 8) & 0xFF) * 12
        if not flags & 0x10000:
            return []
        count = self.memory.u32(cursor)
        cursor += 4
        witnesses = []
        for _ in range(min(count or 0, 256)):
            requirement = self.resolve(self.memory.relative_indirect(cursor))
            witnesses.append((requirement, self.memory.relative(cursor + 4)))
            cursor += 8
        return witnesses

    def requirement_kind(self, protocol, requirement):
        layout = self.protocol_requirements(protocol) if isinstance(protocol, int) else None
        if not layout or not isinstance(requirement, int):
            return None
        start, flags = layout
        index, remainder = divmod(requirement - start, 8)
        if 0 <= index < len(flags) and remainder == 0:
            return index, flags[index] & 0xF
        return None

    def getter_witness(self, conformance, imported_marker):
        for requirement, implementation in conformance["witnesses"]:
            if isinstance(requirement, tuple):
                if imported_marker in requirement[1] and requirement[1].endswith("vgTq"):
                    return implementation
                continue
            kind = self.requirement_kind(conformance["protocol"], requirement)
            if kind and kind[1] == getter_requirement:
                return implementation
        return None
