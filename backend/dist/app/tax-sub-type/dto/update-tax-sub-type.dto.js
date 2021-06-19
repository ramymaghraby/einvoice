"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxSubTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tax_sub_type_dto_1 = require("./create-tax-sub-type.dto");
class UpdateTaxSubTypeDto extends mapped_types_1.PartialType(create_tax_sub_type_dto_1.CreateTaxSubTypeDto) {
}
exports.UpdateTaxSubTypeDto = UpdateTaxSubTypeDto;
//# sourceMappingURL=update-tax-sub-type.dto.js.map