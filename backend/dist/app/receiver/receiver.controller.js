"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiverController = void 0;
const common_1 = require("@nestjs/common");
const receiver_service_1 = require("./receiver.service");
const create_receiver_dto_1 = require("./dto/create-receiver.dto");
const update_receiver_dto_1 = require("./dto/update-receiver.dto");
const swagger_1 = require("@nestjs/swagger");
let ReceiverController = class ReceiverController {
    constructor(receiverService) {
        this.receiverService = receiverService;
    }
    create(createReceiverDto) {
        return this.receiverService.create(createReceiverDto);
    }
    findAll() {
        return this.receiverService.findAll();
    }
    findOne(id) {
        return this.receiverService.findOne(+id);
    }
    update(id, updateReceiverDto) {
        return this.receiverService.update(+id, updateReceiverDto);
    }
    remove(id) {
        return this.receiverService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receiver_dto_1.CreateReceiverDto]),
    __metadata("design:returntype", void 0)
], ReceiverController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceiverController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceiverController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_receiver_dto_1.UpdateReceiverDto]),
    __metadata("design:returntype", void 0)
], ReceiverController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceiverController.prototype, "remove", null);
ReceiverController = __decorate([
    swagger_1.ApiTags('Receiver'),
    common_1.Controller('receiver'),
    __metadata("design:paramtypes", [receiver_service_1.ReceiverService])
], ReceiverController);
exports.ReceiverController = ReceiverController;
//# sourceMappingURL=receiver.controller.js.map