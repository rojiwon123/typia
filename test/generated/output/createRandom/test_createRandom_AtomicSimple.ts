import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_createRandom_AtomicSimple = _test_random(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)({
    random: (
        generator: Partial<typia.IRandomGenerator> = (AtomicSimple as any)
            .RANDOM,
    ): typia.Resolved<AtomicSimple> => {
        const $generator = (typia.createRandom as any).generator;
        return [
            (generator?.boolean ?? $generator.boolean)(),
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        ];
    },
    assert: (input: any): AtomicSimple => {
        const __is = (input: any): input is AtomicSimple => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                "string" === typeof input[2]
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicSimple => {
                const $guard = (typia.createAssert as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "AtomicSimple",
                            value: input,
                        })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected: "[boolean, number, string]",
                                value: input,
                            })) &&
                        ("boolean" === typeof input[0] ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "boolean",
                                value: input[0],
                            })) &&
                        (("number" === typeof input[1] &&
                            Number.isFinite(input[1])) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "number",
                                value: input[1],
                            })) &&
                        ("string" === typeof input[2] ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "string",
                                value: input[2],
                            }))) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "AtomicSimple",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
