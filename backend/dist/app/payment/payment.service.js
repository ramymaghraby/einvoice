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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentService = class PaymentService {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    create(createPaymentDto) {
        return this.paymentRepo.save(createPaymentDto);
    }
    findAll() {
        return this.paymentRepo.find();
    }
    findOne(id) {
        return this.paymentRepo.findOne(id);
    }
    update(id, updatePaymentDto) {
        return this.paymentRepo.update(id, updatePaymentDto);
    }
    remove(id) {
        return this.paymentRepo.delete(id);
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map