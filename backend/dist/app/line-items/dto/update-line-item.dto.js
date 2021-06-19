"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLineItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_line_item_dto_1 = require("./create-line-item.dto");
class UpdateLineItemDto extends swagger_1.PartialType(create_line_item_dto_1.CreateLineItemDto) {
}
exports.UpdateLineItemDto = UpdateLineItemDto;
//# sourceMappingURL=update-line-item.dto.js.map