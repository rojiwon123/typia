import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_isEncode_TagArray = _test_protobuf_isEncode(
    "TagArray",
)<TagArray>(TagArray)({
    isEncode: (input) => typia.protobuf.isEncode<TagArray>(input),
    message: typia.protobuf.message<TagArray>(),
});
