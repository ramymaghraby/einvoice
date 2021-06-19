"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIssuerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_issuer_dto_1 = require("./create-issuer.dto");
class UpdateIssuerDto extends mapped_types_1.PartialType(create_issuer_dto_1.CreateIssuerDto) {
}
exports.UpdateIssuerDto = UpdateIssuerDto;
//# sourceMappingURL=update-issuer.dto.js.map