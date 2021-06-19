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
exports.TaxSubTypeController = void 0;
const common_1 = require("@nestjs/common");
const tax_sub_type_service_1 = require("./tax-sub-type.service");
const create_tax_sub_type_dto_1 = require("./dto/create-tax-sub-type.dto");
const update_tax_sub_type_dto_1 = require("./dto/update-tax-sub-type.dto");
const swagger_1 = require("@nestjs/swagger");
let TaxSubTypeController = class TaxSubTypeController {
    constructor(taxSubTypeService) {
        this.taxSubTypeService = taxSubTypeService;
    }
    create(createTaxSubTypeDto) {
        return this.taxSubTypeService.create(createTaxSubTypeDto);
    }
    findAll() {
        return this.taxSubTypeService.findAll();
    }
    findOne(id) {
        return this.taxSubTypeService.findOne(+id);
    }
    update(id, updateTaxSubTypeDto) {
        return this.taxSubTypeService.update(+id, updateTaxSubTypeDto);
    }
    remove(id) {
        return this.taxSubTypeService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tax_sub_type_dto_1.CreateTaxSubTypeDto]),
    __metadata("design:returntype", void 0)
], TaxSubTypeController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxSubTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxSubTypeController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tax_sub_type_dto_1.UpdateTaxSubTypeDto]),
    __metadata("design:returntype", void 0)
], TaxSubTypeController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxSubTypeController.prototype, "remove", null);
TaxSubTypeController = __decorate([
    swagger_1.ApiTags('Tax Sub Type'),
    common_1.Controller('tax-sub-type'),
    __metadata("design:paramtypes", [tax_sub_type_service_1.TaxSubTypeService])
], TaxSubTypeController);
exports.TaxSubTypeController = TaxSubTypeController;
//# sourceMappingURL=tax-sub-type.controller.js.map