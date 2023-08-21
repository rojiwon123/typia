import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagStep } from "../../structures/TagStep";

export const test_random_TagStep = _test_random("TagStep")<TagStep>(TagStep)({
    random: () => typia.random<TagStep>(),
    assert: typia.createAssert<TagStep>(),
});
