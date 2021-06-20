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
exports.TaxTotalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tax_total_entity_1 = require("./entities/tax-total.entity");
let TaxTotalService = class TaxTotalService {
    constructor(taxTotalRepo) {
        this.taxTotalRepo = taxTotalRepo;
    }
    create(createTaxTotalDto) {
        return this.taxTotalRepo.save(createTaxTotalDto);
    }
    findAll() {
        return this.taxTotalRepo.find();
    }
    findOne(id) {
        return this.taxTotalRepo.findOne(id, { relations: ["taxType", "invoice"] });
    }
    update(id, updateTaxTotalDto) {
        return this.taxTotalRepo.update(id, updateTaxTotalDto);
    }
    remove(id) {
        return this.taxTotalRepo.delete(id);
    }
};
TaxTotalService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tax_total_entity_1.TaxTotal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaxTotalService);
exports.TaxTotalService = TaxTotalService;
//# sourceMappingURL=tax-total.service.js.map