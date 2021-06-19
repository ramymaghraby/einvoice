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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const typeorm_1 = require("typeorm");
let Address = class Address {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], Address.prototype, "branchId", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Address.prototype, "governate", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Address.prototype, "regionCity", void 0);
__decorate([
    typeorm_1.Column({ length: 350 }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    typeorm_1.Column({ length: 6 }),
    __metadata("design:type", String)
], Address.prototype, "buildingNumber", void 0);
__decorate([
    typeorm_1.Column({ length: 8 }),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    typeorm_1.Column({ length: 6 }),
    __metadata("design:type", String)
], Address.prototype, "floor", void 0);
__decorate([
    typeorm_1.Column({ length: 6 }),
    __metadata("design:type", String)
], Address.prototype, "room", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Address.prototype, "landmark", void 0);
__decorate([
    typeorm_1.Column({ length: 300 }),
    __metadata("design:type", String)
], Address.prototype, "additionalInformation", void 0);
Address = __decorate([
    typeorm_1.Entity('Address')
], Address);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map