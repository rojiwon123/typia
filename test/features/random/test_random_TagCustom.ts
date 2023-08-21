import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagCustom } from "../../structures/TagCustom";

export const test_random_TagCustom = _test_random("TagCustom")<TagCustom>(
    TagCustom,
)({
    random: () => typia.random<TagCustom>(TagCustom.RANDOM),
    assert: typia.createAssert<TagCustom>(),
});
