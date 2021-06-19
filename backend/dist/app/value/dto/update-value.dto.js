"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateValueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_value_dto_1 = require("./create-value.dto");
class UpdateValueDto extends swagger_1.PartialType(create_value_dto_1.CreateValueDto) {
}
exports.UpdateValueDto = UpdateValueDto;
//# sourceMappingURL=update-value.dto.js.map