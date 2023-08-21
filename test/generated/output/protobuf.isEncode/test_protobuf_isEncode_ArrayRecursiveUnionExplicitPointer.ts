import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_isEncode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_isEncode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        isEncode: (input) =>
            ((input: ArrayRecursiveUnionExplicitPointer): Uint8Array | null => {
                const is = (
                    input: any,
                ): input is ArrayRecursiveUnionExplicitPointer => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        Array.isArray(input.children) &&
                        input.children.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        ) &&
                        "directory" === input.type;
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.width &&
                        Number.isFinite(input.width) &&
                        "number" === typeof input.height &&
                        Number.isFinite(input.height) &&
                        "string" === typeof input.url &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "file" === input.type &&
                        "jpg" === input.extension;
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "string" === typeof input.content &&
                        "file" === input.type &&
                        "txt" === input.extension;
                    const $io5 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "number" === typeof input.count &&
                        Number.isFinite(input.count) &&
                        "file" === input.type &&
                        "zip" === input.extension;
                    const $io6 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "object" === typeof input.target &&
                        null !== input.target &&
                        $io1(input.target) &&
                        "file" === input.type &&
                        "lnk" === input.extension;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ("directory" === input.type) return $io2(input);
                            else if ("jpg" === input.extension)
                                return $io3(input);
                            else if ("txt" === input.extension)
                                return $io4(input);
                            else if ("zip" === input.extension)
                                return $io5(input);
                            else if ("lnk" === input.extension)
                                return $io6(input);
                            else return false;
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (
                    input: ArrayRecursiveUnionExplicitPointer,
                ): Uint8Array => {
                    const $throws = (typia.protobuf.isEncode as any).throws;
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "value";
                            if (0 !== input.value.length) {
                                for (const elem of input.value) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo1 = (input: any): any => {
                            // property "value";
                            if ("directory" === input.value.type)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo2(input.value);
                                    writer.ldelim();
                                })();
                            else if ("jpg" === input.value.extension)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo3(input.value);
                                    writer.ldelim();
                                })();
                            else if ("txt" === input.value.extension)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo4(input.value);
                                    writer.ldelim();
                                })();
                            else if ("zip" === input.value.extension)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo5(input.value);
                                    writer.ldelim();
                                })();
                            else if ("lnk" === input.value.extension)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo6(input.value);
                                    writer.ldelim();
                                })();
                            else
                                $throws({
                                    expected:
                                        "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                                    value: input.value,
                                });
                        };
                        const $peo2 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "path";
                            writer.uint32(26);
                            writer.string(input.path);
                            // property "children";
                            if (0 !== input.children.length) {
                                for (const elem of input.children) {
                                    writer.uint32(34);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                            // property "type";
                            writer.uint32(42);
                            writer.string(input.type);
                        };
                        const $peo3 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "path";
                            writer.uint32(26);
                            writer.string(input.path);
                            // property "width";
                            writer.uint32(33);
                            writer.double(input.width);
                            // property "height";
                            writer.uint32(41);
                            writer.double(input.height);
                            // property "url";
                            writer.uint32(50);
                            writer.string(input.url);
                            // property "size";
                            writer.uint32(57);
                            writer.double(input.size);
                            // property "type";
                            writer.uint32(66);
                            writer.string(input.type);
                            // property "extension";
                            writer.uint32(74);
                            writer.string(input.extension);
                        };
                        const $peo4 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "path";
                            writer.uint32(26);
                            writer.string(input.path);
                            // property "size";
                            writer.uint32(33);
                            writer.double(input.size);
                            // property "content";
                            writer.uint32(42);
                            writer.string(input.content);
                            // property "type";
                            writer.uint32(50);
                            writer.string(input.type);
                            // property "extension";
                            writer.uint32(58);
                            writer.string(input.extension);
                        };
                        const $peo5 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "path";
                            writer.uint32(26);
                            writer.string(input.path);
                            // property "size";
                            writer.uint32(33);
                            writer.double(input.size);
                            // property "count";
                            writer.uint32(41);
                            writer.double(input.count);
                            // property "type";
                            writer.uint32(50);
                            writer.string(input.type);
                            // property "extension";
                            writer.uint32(58);
                            writer.string(input.extension);
                        };
                        const $peo6 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "path";
                            writer.uint32(26);
                            writer.string(input.path);
                            // property "target";
                            writer.uint32(34);
                            writer.fork();
                            $peo1(input.target);
                            writer.ldelim();
                            // property "type";
                            writer.uint32(42);
                            writer.string(input.type);
                            // property "extension";
                            writer.uint32(50);
                            writer.string(input.extension);
                        };
                        const $io1 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            $iu0(input.value);
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            Array.isArray(input.children) &&
                            input.children.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            ) &&
                            "directory" === input.type;
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "number" === typeof input.width &&
                            "number" === typeof input.height &&
                            "string" === typeof input.url &&
                            "number" === typeof input.size &&
                            "file" === input.type &&
                            "jpg" === input.extension;
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "number" === typeof input.size &&
                            "string" === typeof input.content &&
                            "file" === input.type &&
                            "txt" === input.extension;
                        const $io5 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "number" === typeof input.size &&
                            "number" === typeof input.count &&
                            "file" === input.type &&
                            "zip" === input.extension;
                        const $io6 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "object" === typeof input.target &&
                            null !== input.target &&
                            $io1(input.target) &&
                            "file" === input.type &&
                            "lnk" === input.extension;
                        const $iu0 = (input: any): any =>
                            (() => {
                                if ("directory" === input.type)
                                    return $io2(input);
                                else if ("jpg" === input.extension)
                                    return $io3(input);
                                else if ("txt" === input.extension)
                                    return $io4(input);
                                else if ("zip" === input.extension)
                                    return $io5(input);
                                else if ("lnk" === input.extension)
                                    return $io6(input);
                                else return false;
                            })();
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return is(input) ? encode(input) : null;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ArrayRecursiveUnionExplicitPointer {\n    repeated ArrayRecursiveUnionExplicitPointer.IBucket value = 1;\n    message IBucket {\n        oneof value {\n            ArrayRecursiveUnionExplicitPointer.IDirectory v1 = 1;\n            ArrayRecursiveUnionExplicitPointer.IImageFile v2 = 2;\n            ArrayRecursiveUnionExplicitPointer.ITextFile v3 = 3;\n            ArrayRecursiveUnionExplicitPointer.IZipFile v4 = 4;\n            ArrayRecursiveUnionExplicitPointer.IShortcut v5 = 5;\n        }\n    }\n\n    message IDirectory {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        repeated ArrayRecursiveUnionExplicitPointer.IBucket children = 4;\n        required string type = 5;\n    }\n\n    message IImageFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double width = 4;\n        required double height = 5;\n        required string url = 6;\n        required double size = 7;\n        required string type = 8;\n        required string extension = 9;\n    }\n\n    message ITextFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double size = 4;\n        required string content = 5;\n        required string type = 6;\n        required string extension = 7;\n    }\n\n    message IZipFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double size = 4;\n        required double count = 5;\n        required string type = 6;\n        required string extension = 7;\n    }\n\n    message IShortcut {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required ArrayRecursiveUnionExplicitPointer.IBucket target = 4;\n        required string type = 5;\n        required string extension = 6;\n    }\n}',
    });
