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
exports.TaxableItemController = void 0;
const common_1 = require("@nestjs/common");
const taxable_item_service_1 = require("./taxable-item.service");
const create_taxable_item_dto_1 = require("./dto/create-taxable-item.dto");
const update_taxable_item_dto_1 = require("./dto/update-taxable-item.dto");
const swagger_1 = require("@nestjs/swagger");
let TaxableItemController = class TaxableItemController {
    constructor(taxableItemService) {
        this.taxableItemService = taxableItemService;
    }
    create(createTaxableItemDto) {
        return this.taxableItemService.create(createTaxableItemDto);
    }
    findAll() {
        return this.taxableItemService.findAll();
    }
    findOne(id) {
        return this.taxableItemService.findOne(+id);
    }
    update(id, updateTaxableItemDto) {
        return this.taxableItemService.update(+id, updateTaxableItemDto);
    }
    remove(id) {
        return this.taxableItemService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_taxable_item_dto_1.CreateTaxableItemDto]),
    __metadata("design:returntype", void 0)
], TaxableItemController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxableItemController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxableItemController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_taxable_item_dto_1.UpdateTaxableItemDto]),
    __metadata("design:returntype", void 0)
], TaxableItemController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxableItemController.prototype, "remove", null);
TaxableItemController = __decorate([
    swagger_1.ApiTags('Taxable Items'),
    common_1.Controller('taxable-item'),
    __metadata("design:paramtypes", [taxable_item_service_1.TaxableItemService])
], TaxableItemController);
exports.TaxableItemController = TaxableItemController;
//# sourceMappingURL=taxable-item.controller.js.map