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
exports.TaxTotalController = void 0;
const common_1 = require("@nestjs/common");
const tax_total_service_1 = require("./tax-total.service");
const create_tax_total_dto_1 = require("./dto/create-tax-total.dto");
const update_tax_total_dto_1 = require("./dto/update-tax-total.dto");
const swagger_1 = require("@nestjs/swagger");
let TaxTotalController = class TaxTotalController {
    constructor(taxTotalService) {
        this.taxTotalService = taxTotalService;
    }
    create(createTaxTotalDto) {
        return this.taxTotalService.create(createTaxTotalDto);
    }
    findAll() {
        return this.taxTotalService.findAll();
    }
    findOne(id) {
        return this.taxTotalService.findOne(+id);
    }
    update(id, updateTaxTotalDto) {
        return this.taxTotalService.update(+id, updateTaxTotalDto);
    }
    remove(id) {
        return this.taxTotalService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tax_total_dto_1.CreateTaxTotalDto]),
    __metadata("design:returntype", void 0)
], TaxTotalController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxTotalController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxTotalController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tax_total_dto_1.UpdateTaxTotalDto]),
    __metadata("design:returntype", void 0)
], TaxTotalController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxTotalController.prototype, "remove", null);
TaxTotalController = __decorate([
    swagger_1.ApiTags('Tax Total'),
    common_1.Controller('tax-total'),
    __metadata("design:paramtypes", [tax_total_service_1.TaxTotalService])
], TaxTotalController);
exports.TaxTotalController = TaxTotalController;
//# sourceMappingURL=tax-total.controller.js.map