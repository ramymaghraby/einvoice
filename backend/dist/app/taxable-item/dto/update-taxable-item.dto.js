"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxableItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_taxable_item_dto_1 = require("./create-taxable-item.dto");
class UpdateTaxableItemDto extends swagger_1.PartialType(create_taxable_item_dto_1.CreateTaxableItemDto) {
}
exports.UpdateTaxableItemDto = UpdateTaxableItemDto;
//# sourceMappingURL=update-taxable-item.dto.js.map