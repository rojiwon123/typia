import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_assert_DynamicComposite = _test_assert(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input: any): DynamicComposite => {
    const __is = (input: any): input is DynamicComposite => {
        const $join = (typia.createAssert as any).join;
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key))
                    return "number" === typeof value && Number.isFinite(value);
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value;
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value;
                if (
                    RegExp(
                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    return (
                        "string" === typeof value ||
                        ("number" === typeof value && Number.isFinite(value)) ||
                        "boolean" === typeof value
                    );
                if (
                    RegExp(
                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    return "boolean" === typeof value;
                return true;
            });
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicComposite => {
            const $guard = (typia.createAssert as any).guard;
            const $join = (typia.createAssert as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.id ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (
                            RegExp(
                                /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                        )
                            return (
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "number",
                                    value: value,
                                })
                            );
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (
                            RegExp(
                                /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return (
                                "string" === typeof value ||
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                "boolean" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "(boolean | number | string)",
                                    value: value,
                                })
                            );
                        if (
                            RegExp(
                                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return (
                                "boolean" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "boolean",
                                    value: value,
                                })
                            );
                        return true;
                    }));
            return (
                ((("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "DynamicComposite",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "DynamicComposite",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
