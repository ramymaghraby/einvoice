"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
let DeliveryService = class DeliveryService {
    create(createDeliveryDto) {
        return 'This action adds a new delivery';
    }
    findAll() {
        return `This action returns all delivery`;
    }
    findOne(id) {
        return `This action returns a #${id} delivery`;
    }
    update(id, updateDeliveryDto) {
        return `This action updates a #${id} delivery`;
    }
    remove(id) {
        return `This action removes a #${id} delivery`;
    }
};
DeliveryService = __decorate([
    common_1.Injectable()
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map