"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxTotalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tax_total_dto_1 = require("./create-tax-total.dto");
class UpdateTaxTotalDto extends mapped_types_1.PartialType(create_tax_total_dto_1.CreateTaxTotalDto) {
}
exports.UpdateTaxTotalDto = UpdateTaxTotalDto;
//# sourceMappingURL=update-tax-total.dto.js.map