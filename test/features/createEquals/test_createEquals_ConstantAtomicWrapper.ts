import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_equals_ConstantAtomicWrapper = _test_equals(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createEquals<ConstantAtomicWrapper>(),
);
