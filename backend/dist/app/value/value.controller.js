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
exports.ValueController = void 0;
const common_1 = require("@nestjs/common");
const value_service_1 = require("./value.service");
const create_value_dto_1 = require("./dto/create-value.dto");
const update_value_dto_1 = require("./dto/update-value.dto");
const swagger_1 = require("@nestjs/swagger");
let ValueController = class ValueController {
    constructor(valueService) {
        this.valueService = valueService;
    }
    create(createValueDto) {
        return this.valueService.create(createValueDto);
    }
    findAll() {
        return this.valueService.findAll();
    }
    findOne(id) {
        return this.valueService.findOne(+id);
    }
    update(id, updateValueDto) {
        return this.valueService.update(+id, updateValueDto);
    }
    remove(id) {
        return this.valueService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_value_dto_1.CreateValueDto]),
    __metadata("design:returntype", void 0)
], ValueController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValueController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ValueController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_value_dto_1.UpdateValueDto]),
    __metadata("design:returntype", void 0)
], ValueController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ValueController.prototype, "remove", null);
ValueController = __decorate([
    swagger_1.ApiTags('Value'),
    common_1.Controller('value'),
    __metadata("design:paramtypes", [value_service_1.ValueService])
], ValueController);
exports.ValueController = ValueController;
//# sourceMappingURL=value.controller.js.map