import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createIsEncode_ObjectJsonTag =
    _test_protobuf_isEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
        encode: typia.protobuf.createIsEncode<ObjectJsonTag>(),
        decode: typia.protobuf.createDecode<ObjectJsonTag>(),
        message: typia.protobuf.message<ObjectJsonTag>(),
    });
