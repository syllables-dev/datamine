small_string_tags = (0xE, 0xA)
native_string_tags = (0xD, 0x1, 0x9, 0x5, 0xF, 0x3, 0xB)
long_string_header = 0x20


def is_printable(raw):
    return all(32 <= byte < 127 for byte in raw)


def small_string(low, high):
    if high >> 60 not in small_string_tags:
        return None
    count = (high >> 56) & 0xF
    raw = low.to_bytes(8, "little") + (high & 0x00FF_FFFF_FFFF_FFFF).to_bytes(8, "little")
    if count and not any(raw[count:15]) and is_printable(raw[:count]):
        return raw[:count].decode("latin1")
    return None


def long_string_location(low, high, tags=native_string_tags):
    if not high >> 63 or low >> 60 not in tags:
        return None
    return (high & 0x7FFF_FFFF_FFFF_FFFF) + long_string_header, low & 0xFFFF_FFFF_FFFF


def read_long_string(memory, address, count):
    data = memory.read(address, count + 1)
    if data and len(data) == count + 1 and data[count] == 0 and b"\0" not in data[:count]:
        return data[:count].decode("utf-8", "replace")
    return None


def decode_string(memory, low, high):
    if low == 0 and high == 0:
        return None
    if high >> 60 in small_string_tags:
        return small_string(low, high)
    location = long_string_location(low, high)
    if location and location[1] < 8192:
        return read_long_string(memory, *location)
    return None


def encode_small_string(text):
    data = text.encode("utf-8")
    if len(data) > 15:
        return None
    raw = data.ljust(16, b"\0")
    low = int.from_bytes(raw[:8], "little")
    high = int.from_bytes(raw[8:15] + b"\0", "little") | ((0xE0 | len(data)) << 56)
    return low, high


def long_string_words(buffer, length):
    return 0xD000_0000_0000_0000 | length, 0x8000_0000_0000_0000 | buffer
