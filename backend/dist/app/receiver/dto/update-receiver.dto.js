"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReceiverDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_receiver_dto_1 = require("./create-receiver.dto");
class UpdateReceiverDto extends mapped_types_1.PartialType(create_receiver_dto_1.CreateReceiverDto) {
}
exports.UpdateReceiverDto = UpdateReceiverDto;
//# sourceMappingURL=update-receiver.dto.js.map