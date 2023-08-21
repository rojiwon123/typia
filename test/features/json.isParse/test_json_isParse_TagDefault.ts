import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_isParse_TagDefault = _test_json_isParse(
    "TagDefault",
)<TagDefault>(TagDefault)((input) => typia.json.isParse<TagDefault>(input));
