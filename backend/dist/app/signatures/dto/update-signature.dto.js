"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignatureDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_signature_dto_1 = require("./create-signature.dto");
class UpdateSignatureDto extends mapped_types_1.PartialType(create_signature_dto_1.CreateSignatureDto) {
}
exports.UpdateSignatureDto = UpdateSignatureDto;
//# sourceMappingURL=update-signature.dto.js.map