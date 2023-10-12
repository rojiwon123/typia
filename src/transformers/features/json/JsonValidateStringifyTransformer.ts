import { JsonValidateStringifyProgrammer } from "../../../programmers/json/JsonValidateStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonValidateStringifyTransformer {
    export const transform = GenericTransformer.scalar("json.validatStringify")(
        (project) => (modulo) =>
            JsonValidateStringifyProgrammer.write(project)(modulo),
    );
}
