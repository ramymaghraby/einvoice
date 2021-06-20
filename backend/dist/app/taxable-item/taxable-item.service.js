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
exports.TaxableItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const taxable_item_entity_1 = require("./entities/taxable-item.entity");
let TaxableItemService = class TaxableItemService {
    constructor(taxableItemRepo) {
        this.taxableItemRepo = taxableItemRepo;
    }
    create(createTaxableItemDto) {
        return this.taxableItemRepo.save(createTaxableItemDto);
    }
    findAll() {
        return this.taxableItemRepo.find();
    }
    findOne(id) {
        return this.taxableItemRepo.findOne(id, { relations: ["lineItem", "taxType", "subType"] });
    }
    update(id, updateTaxableItemDto) {
        return this.taxableItemRepo.update(id, updateTaxableItemDto);
    }
    remove(id) {
        return this.taxableItemRepo.delete(id);
    }
};
TaxableItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(taxable_item_entity_1.TaxableItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaxableItemService);
exports.TaxableItemService = TaxableItemService;
//# sourceMappingURL=taxable-item.service.js.map