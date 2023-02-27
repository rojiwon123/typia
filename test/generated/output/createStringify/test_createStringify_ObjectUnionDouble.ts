import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createStringify_ObjectUnionDouble = _test_stringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: ObjectUnionDouble): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        const $throws = (typia.createStringify as any).throws;
        const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu0(input.child);
        const $io1 = (input: any): boolean => "number" === typeof input.x;
        const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io3(input.value);
        const $io3 = (input: any): boolean => "boolean" === typeof input.y;
        const $io4 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io5(input.value);
        const $io5 = (input: any): boolean => "number" === typeof input.y;
        const $io6 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io7(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io7 = (input: any): boolean => "string" === typeof input.x;
        const $io8 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io9(input.value);
        const $io9 = (input: any): boolean => "string" === typeof input.y;
        const $io10 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11 = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every((elem: any) => "number" === typeof elem);
        const $iu0 = (input: any): any => $io2(input) || $io4(input);
        const $iu1 = (input: any): any => $io8(input) || $io10(input);
        const $iu2 = (input: any): any => $io0(input) || $io6(input);
        const $so0 = (input: any): any =>
            `{"value":${`{"x":${$number(input.value.x)}}`},"child":${$su0(
                input.child,
            )}}`;
        const $so2 = (input: any): any =>
            `{"value":${`{"y":${input.value.y}}`}}`;
        const $so4 = (input: any): any =>
            `{"value":${`{"y":${$number(input.value.y)}}`}}`;
        const $so6 = (input: any): any =>
            `{"value":${`{"x":${$string(input.value.x)}}`},"child":${$su1(
                input.child,
            )}}`;
        const $so8 = (input: any): any =>
            `{"value":${`{"y":${$string(input.value.y)}}`}}`;
        const $so10 = (input: any): any => `{"value":${$so11(input.value)}}`;
        const $so11 = (input: any): any =>
            `{"y":${`[${input.y
                .map((elem: any) => $number(elem))
                .join(",")}]`}}`;
        const $su0 = (input: any): any =>
            (() => {
                if ($io2(input)) return $so2(input);
                if ($io4(input)) return $so4(input);
                $throws({
                    expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                    value: input,
                });
            })();
        const $su1 = (input: any): any =>
            (() => {
                if ($io8(input)) return $so8(input);
                if ($io10(input)) return $so10(input);
                $throws({
                    expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                    value: input,
                });
            })();
        const $su2 = (input: any): any =>
            (() => {
                if ($io0(input)) return $so0(input);
                if ($io6(input)) return $so6(input);
                $throws({
                    expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                    value: input,
                });
            })();
        return `[${input.map((elem: any) => $su2(elem)).join(",")}]`;
    },
);
