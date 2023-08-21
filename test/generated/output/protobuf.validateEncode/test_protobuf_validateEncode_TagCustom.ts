import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_validateEncode_TagCustom =
    _test_protobuf_validateEncode("TagCustom")<TagCustom>(TagCustom)({
        validateEncode: (input) =>
            ((input: TagCustom): typia.IValidation<Uint8Array> => {
                const validate = (input: any): typia.IValidation<TagCustom> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is TagCustom => {
                        const $is_uuid = (typia.protobuf.validateEncode as any)
                            .is_uuid;
                        const $is_custom = (
                            typia.protobuf.validateEncode as any
                        ).is_custom;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).id &&
                            $is_uuid((input as any).id) &&
                            "string" === typeof (input as any).dollar &&
                            $is_custom(
                                "dollar",
                                "string",
                                "",
                                (input as any).dollar,
                            ) &&
                            "string" === typeof (input as any).postfix &&
                            $is_custom(
                                "postfix",
                                "string",
                                "abcd",
                                (input as any).postfix,
                            ) &&
                            "number" === typeof (input as any).log &&
                            Number.isFinite((input as any).log) &&
                            $is_custom(
                                "powerOf",
                                "number",
                                "10",
                                (input as any).log,
                            )
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateEncode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TagCustom => {
                            const $is_uuid = (
                                typia.protobuf.validateEncode as any
                            ).is_uuid;
                            const $is_custom = (
                                typia.protobuf.validateEncode as any
                            ).is_custom;
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ("string" === typeof input.id &&
                                        ($is_uuid(input.id) ||
                                            $report(_exceptionable, {
                                                path: _path + ".id",
                                                expected:
                                                    "string (@format uuid)",
                                                value: input.id,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: "string",
                                            value: input.id,
                                        }),
                                    ("string" === typeof input.dollar &&
                                        ($is_custom(
                                            "dollar",
                                            "string",
                                            "",
                                            input.dollar,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".dollar",
                                                expected: "string (@dollar)",
                                                value: input.dollar,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".dollar",
                                            expected: "string",
                                            value: input.dollar,
                                        }),
                                    ("string" === typeof input.postfix &&
                                        ($is_custom(
                                            "postfix",
                                            "string",
                                            "abcd",
                                            input.postfix,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".postfix",
                                                expected:
                                                    "string (@postfix abcd)",
                                                value: input.postfix,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".postfix",
                                            expected: "string",
                                            value: input.postfix,
                                        }),
                                    ("number" === typeof input.log &&
                                        Number.isFinite(input.log) &&
                                        ($is_custom(
                                            "powerOf",
                                            "number",
                                            "10",
                                            input.log,
                                        ) ||
                                            $report(_exceptionable, {
                                                path: _path + ".log",
                                                expected:
                                                    "number (@powerOf 10)",
                                                value: input.log,
                                            }))) ||
                                        $report(_exceptionable, {
                                            path: _path + ".log",
                                            expected: "number",
                                            value: input.log,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "TagCustom",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagCustom",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    }
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const encode = (input: TagCustom): Uint8Array => {
                    const $is_uuid = (typia.protobuf.validateEncode as any)
                        .is_uuid;
                    const $is_custom = (typia.protobuf.validateEncode as any)
                        .is_custom;
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            writer.uint32(10);
                            writer.string(input.id);
                            // property "dollar";
                            writer.uint32(18);
                            writer.string(input.dollar);
                            // property "postfix";
                            writer.uint32(26);
                            writer.string(input.postfix);
                            // property "log";
                            writer.uint32(33);
                            writer.double(input.log);
                        };
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                const output = validate(input) as any;
                if (output.success) output.data = encode(input);
                return output;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
    });
