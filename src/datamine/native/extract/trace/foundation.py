import re

from extract.trace.urlmodel import parse_url, query_string, render

components_setter_fields = {
    "scheme": "scheme",
    "host": "host",
    "path": "path",
    "percentEncodedPath": "path",
    "query": "rawquery",
    "percentEncodedQuery": "rawquery",
    "queryItems": "queryItems",
    "percentEncodedQueryItems": "queryItems",
}
components_setter = re.compile(r"13URLComponentsV\d+([A-Za-z]+?)(SS|Say|Si|10Foundation)\S*vs$")
components_getter = re.compile(r"13URLComponentsV\d+(path|host|scheme|query|percentEncodedPath|percentEncodedQuery|queryItems|string)\S*vg$")
components_url_getter = re.compile(r"13URLComponentsV3url\S*vg$")
url_from_string = re.compile(r"3URLV6string\S*cfC$")
url_getter = re.compile(r"10Foundation3URLV\d+(path|host|scheme|query|absoluteString|relativePath|relativeString)\S*vg$")
request_from_url = re.compile(r"10URLRequestV3url\S*cfC$")
request_mutator = re.compile(r"(10httpMethod|forHTTPHeaderField|8httpBody)")
objc_component_setters = ("setPath:", "setPercentEncodedPath:", "setHost:", "setScheme:", "setQuery:", "setPercentEncodedQuery:", "setQueryItems:")
objc_component_fields = {"setPath:": "path", "setPercentEncodedPath:": "path", "setHost:": "host", "setScheme:": "scheme"}
objc_request_initialisers = ("requestWithURL:", "initWithURL:", "requestWithURL:cachePolicy:timeoutInterval:", "initWithURL:cachePolicy:timeoutInterval:")
objc_request_mutators = ("setHTTPMethod:", "setValue:forHTTPHeaderField:", "addValue:forHTTPHeaderField:", "setHTTPBody:")


def join_path(base, piece):
    return (base or "").rstrip("/") + "/" + (piece or "{?}").lstrip("/")


def return_field(tracer, emulator, handle, field):
    entry = tracer.objects[handle]
    if field == "queryItems":
        handles = tracer.objects.item_handles(entry["query"])
        buffer = tracer.heap.allocate(emulator)
        emulator.write64(buffer + 16, len(handles))
        for index, item in enumerate(handles):
            emulator.write64(buffer + 32 + index * 8, item)
        emulator.set_reg(0, buffer if handles else 0)
        return True
    if field in ("absoluteString", "string", "relativeString"):
        text = render(entry)
    elif field in ("path", "percentEncodedPath", "relativePath"):
        text = entry["path"] or ""
    elif field in ("query", "percentEncodedQuery"):
        text = query_string(entry)
    else:
        text = entry.get(field)
    if text is None:
        emulator.set_reg(0, 0)
        emulator.set_reg(1, 0)
        return True
    low, high = tracer.values.make_string(text)
    emulator.set_reg(0, low)
    emulator.set_reg(1, high)
    return True


def url_components_call(tracer, emulator, name):
    objects, text = tracer.objects, tracer.values.text
    if name.endswith("cfC") or "cfC" in name[-6:]:
        if "6string" in name:
            return tracer.return_object(emulator, objects.create("components", **parse_url(text(emulator))))
        if "3url" in name:
            return tracer.return_object(emulator, objects.derive("components", objects.resolve(emulator, emulator.reg(0))))
        return tracer.return_object(emulator, objects.create("components"))
    setter = components_setter.search(name)
    if setter and setter.group(1) in components_setter_fields:
        handle = objects.implicit_self(emulator, "components")
        field = components_setter_fields[setter.group(1)]
        if field == "queryItems":
            objects.attach_items(emulator, handle, emulator.reg(0))
        elif field == "rawquery":
            objects[handle]["query"] = parse_url("?" + (text(emulator) or ""))["query"]
        else:
            objects[handle][field] = text(emulator)
        return True
    getter = components_getter.search(name)
    if getter:
        return return_field(tracer, emulator, objects.implicit_self(emulator, "components"), getter.group(1))
    if "3url10Foundation3URLVSgvg" in name or components_url_getter.search(name):
        return tracer.return_object(emulator, objects.derive("url", objects.implicit_self(emulator, "components")))
    return None


def url_call(tracer, emulator, name):
    objects, values = tracer.objects, tracer.values
    if url_from_string.search(name):
        return tracer.return_object(emulator, objects.create("url", **parse_url(values.text(emulator))))
    if "appendingPathComponent" in name or "9appending4path" in name:
        source = objects.receiver(emulator)
        piece = values.string_at(emulator, emulator.reg(0), []) if "9appending4path" in name else values.text(emulator)
        base = objects.snapshot(source)["path"] if source in objects else "{base}"
        return tracer.return_object(emulator, objects.derive("url", source, path=join_path(base, piece)))
    getter = url_getter.search(name)
    if getter:
        handle = objects.receiver(emulator)
        return return_field(tracer, emulator, handle, getter.group(1)) if handle is not None else None
    if "9appending10queryItems" in name:
        source = objects.receiver(emulator)
        extra = objects.pairs(objects.items_in_array(emulator, emulator.reg(0)))
        current = objects.snapshot(source)["query"] if source in objects else []
        return tracer.return_object(emulator, objects.derive("url", source, query=current + extra))
    return None


def url_request_call(tracer, emulator, name):
    objects, text = tracer.objects, tracer.values.text
    if "3url11cachePolicy15timeoutInterval" in name or request_from_url.search(name):
        return tracer.return_object(emulator, objects.derive("request", objects.resolve(emulator, emulator.reg(0)), method="GET"))
    if not request_mutator.search(name):
        return None
    handle = objects.implicit_self(emulator, "request")
    if "10httpMethod" in name and name.endswith("vs"):
        objects[handle]["method"] = text(emulator)
        tracer.method_events.append((tracer.current_site, objects[handle]["method"]))
        return True
    if "8setValue_18forHTTPHeaderField" in name or "8addValue_18forHTTPHeaderField" in name:
        objects[handle]["headers"][text(emulator, 2) or "{?}"] = text(emulator, 0)
        return True
    if "8httpBody" in name and name.endswith("vs"):
        objects[handle]["body"] = True
        return True
    return None


def swift_call(tracer, emulator, name):
    if "13URLComponentsV" in name:
        return url_components_call(tracer, emulator, name)
    if "12URLQueryItemV4name5value" in name:
        text = tracer.values.text
        return tracer.return_object(emulator, tracer.objects.create("item", name=text(emulator, 0), value=text(emulator, 2), site=tracer.current_site))
    if "10Foundation3URLV" in name:
        return url_call(tracer, emulator, name)
    if "10Foundation10URLRequestV" in name:
        return url_request_call(tracer, emulator, name)
    return None


def objc_call(tracer, emulator, name):
    objects = tracer.objects
    selector = name[5:]

    def argument(register):
        return tracer.values.object_string(emulator, emulator.reg(register))

    receiver = objects.resolve(emulator, emulator.reg(0))
    if selector in ("URLWithString:", "URLWithString:relativeToURL:"):
        return tracer.return_object(emulator, objects.create("url", **parse_url(argument(2))))
    if selector == "componentsWithString:":
        return tracer.return_object(emulator, objects.create("components", **parse_url(argument(2))))
    if selector in ("initWithString:", "initWithString:relativeToURL:"):
        raw = argument(2)
        if raw and ("/" in raw or "://" in raw):
            return tracer.return_object(emulator, objects.create("url", **parse_url(raw)))
        return None
    if selector in ("componentsWithURL:resolvingAgainstBaseURL:", "initWithURL:resolvingAgainstBaseURL:"):
        return tracer.return_object(emulator, objects.derive("components", objects.resolve(emulator, emulator.reg(2))))
    if selector in ("queryItemWithName:value:", "initWithName:value:"):
        return tracer.return_object(emulator, objects.create("item", name=argument(2), value=argument(3), site=tracer.current_site))
    if selector in ("arrayWithObjects:count:", "initWithObjects:count:"):
        base, count = emulator.reg(2), emulator.reg(3)
        members = [emulator.read64(base + 8 * index) for index in range(count)] if 0 < count < 128 else []
        return tracer.return_object(emulator, objects.create("array", items=[member for member in members if objects.is_kind(member, "item")]))
    if selector == "arrayWithObject:":
        member = emulator.reg(2)
        return tracer.return_object(emulator, objects.create("array", items=[member] if member in objects else []))
    if selector in ("array", "arrayWithCapacity:"):
        return tracer.return_object(emulator, objects.create("array", items=[]))
    receiver_is_array = receiver and objects[receiver]["kind"] == "array"
    if selector == "addObject:" and receiver_is_array:
        if emulator.reg(2) in objects:
            objects[receiver]["items"].append(emulator.reg(2))
        return True
    if selector in ("arrayByAddingObject:", "arrayByAddingObjectsFromArray:") and receiver_is_array:
        extra = [emulator.reg(2)] if selector == "arrayByAddingObject:" else objects.items_in_array(emulator, emulator.reg(2))
        return tracer.return_object(emulator, objects.create("array", items=objects[receiver]["items"] + [element for element in extra if element in objects]))
    if selector in objc_component_setters:
        receiver = receiver or objects.implicit_receiver(emulator, "components")
        if selector == "setQueryItems:":
            objects.attach_items(emulator, receiver, emulator.reg(2))
        elif "Query:" in selector:
            objects[receiver]["query"] = parse_url("?" + (argument(2) or ""))["query"]
        else:
            objects[receiver][objc_component_fields[selector]] = argument(2)
        return True
    if selector == "URL" and receiver and objects[receiver]["kind"] == "components":
        return tracer.return_object(emulator, objects.derive("url", receiver))
    if selector in ("URLByAppendingPathComponent:", "URLByAppendingPathComponent:isDirectory:") and receiver:
        return tracer.return_object(emulator, objects.derive("url", receiver, path=join_path(objects[receiver]["path"], argument(2))))
    if selector in objc_request_initialisers:
        source = objects.resolve(emulator, emulator.reg(2))
        if source is not None or selector.startswith("request"):
            return tracer.return_object(emulator, objects.derive("request", source, method="GET"))
        return None
    if selector in objc_request_mutators:
        receiver = receiver or objects.implicit_receiver(emulator, "request")
    if receiver and objects[receiver]["kind"] == "request":
        if selector == "setHTTPMethod:":
            objects[receiver]["method"] = argument(2)
            tracer.method_events.append((tracer.current_site, objects[receiver]["method"]))
            return True
        if selector in ("setValue:forHTTPHeaderField:", "addValue:forHTTPHeaderField:"):
            objects[receiver]["headers"][argument(3) or "{?}"] = argument(2)
            return True
        if selector == "setHTTPBody:":
            objects[receiver]["body"] = True
            return True
    return None
