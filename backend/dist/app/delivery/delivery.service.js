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
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const delivery_entity_1 = require("./entities/delivery.entity");
let DeliveryService = class DeliveryService {
    constructor(deliveryRepo) {
        this.deliveryRepo = deliveryRepo;
    }
    create(createDeliveryDto) {
        return this.deliveryRepo.save(createDeliveryDto);
    }
    findAll() {
        return this.deliveryRepo.find();
    }
    findOne(id) {
        return this.deliveryRepo.findOne(id);
    }
    update(id, updateDeliveryDto) {
        return this.deliveryRepo.update(id, updateDeliveryDto);
    }
    remove(id) {
        return this.deliveryRepo.delete(id);
    }
};
DeliveryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(delivery_entity_1.Delivery)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map