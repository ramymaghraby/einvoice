"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tax_type_dto_1 = require("./create-tax-type.dto");
class UpdateTaxTypeDto extends mapped_types_1.PartialType(create_tax_type_dto_1.CreateTaxTypeDto) {
}
exports.UpdateTaxTypeDto = UpdateTaxTypeDto;
//# sourceMappingURL=update-tax-type.dto.js.map