import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_isEncode_TagTypeBigInt = _test_protobuf_isEncode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    isEncode: (input) => typia.protobuf.isEncode<TagTypeBigInt>(input),
    message: typia.protobuf.message<TagTypeBigInt>(),
});
