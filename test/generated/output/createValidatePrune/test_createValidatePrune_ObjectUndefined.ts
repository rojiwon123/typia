import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_createValidatePrune_ObjectUndefined = _test_validatePrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: any): typia.IValidation<ObjectUndefined> => {
        const validate = (input: any): typia.IValidation<ObjectUndefined> => {
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUndefined => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        undefined === input.professor ||
                            "string" === typeof input.professor ||
                            ("number" === typeof input.professor &&
                                Number.isFinite(input.professor)) ||
                            $report(_exceptionable, {
                                path: _path + ".professor",
                                expected: "(number | string | undefined)",
                                value: input.professor,
                            }),
                        undefined === input.classroom ||
                            ((("object" === typeof input.classroom &&
                                null !== input.classroom) ||
                                $report(_exceptionable, {
                                    path: _path + ".classroom",
                                    expected:
                                        "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                                    value: input.classroom,
                                })) &&
                                $vo1(
                                    input.classroom,
                                    _path + ".classroom",
                                    true && _exceptionable,
                                )) ||
                            $report(_exceptionable, {
                                path: _path + ".classroom",
                                expected:
                                    "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                                value: input.classroom,
                            }),
                        undefined === input.grade ||
                            ("number" === typeof input.grade &&
                                Number.isFinite(input.grade)) ||
                            $report(_exceptionable, {
                                path: _path + ".grade",
                                expected: "(number | undefined)",
                                value: input.grade,
                            }),
                        (null !== input.nothing ||
                            $report(_exceptionable, {
                                path: _path + ".nothing",
                                expected: "undefined",
                                value: input.nothing,
                            })) &&
                            (undefined === input.nothing ||
                                $report(_exceptionable, {
                                    path: _path + ".nothing",
                                    expected: "undefined",
                                    value: input.nothing,
                                })),
                        true,
                        (null !== input.never ||
                            $report(_exceptionable, {
                                path: _path + ".never",
                                expected: "undefined",
                                value: input.never,
                            })) &&
                            (undefined === input.never ||
                                $report(_exceptionable, {
                                    path: _path + ".never",
                                    expected: "undefined",
                                    value: input.never,
                                })),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<Resolve<ObjectUndefined.ILecture>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "Resolve<ObjectUndefined.ILecture>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ObjectUndefined.ILecture>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<ObjectUndefined.ILecture>>",
                        value: input,
                    })
                );
            })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: ObjectUndefined): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id && "string" === typeof input.name;
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.classroom &&
                    null !== input.classroom
                )
                    $po1(input.classroom);
                for (const key of Object.keys(input)) {
                    if (
                        "name" === key ||
                        "professor" === key ||
                        "classroom" === key ||
                        "grade" === key ||
                        "nothing" === key ||
                        "unknown" === key ||
                        "never" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ObjectUndefined.SPOILERS,
);
