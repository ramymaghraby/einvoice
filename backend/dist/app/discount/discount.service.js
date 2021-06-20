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
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const discount_entity_1 = require("./entities/discount.entity");
let DiscountService = class DiscountService {
    constructor(discountRepo) {
        this.discountRepo = discountRepo;
    }
    create(createDiscountDto) {
        return this.discountRepo.save(createDiscountDto);
    }
    findAll() {
        return this.discountRepo.find();
    }
    findOne(id) {
        return this.discountRepo.findOne(id);
    }
    update(id, updateDiscountDto) {
        return this.discountRepo.update(id, updateDiscountDto);
    }
    remove(id) {
        return `This action removes a #${id} discount`;
    }
};
DiscountService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(discount_entity_1.Discount)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DiscountService);
exports.DiscountService = DiscountService;
//# sourceMappingURL=discount.service.js.map