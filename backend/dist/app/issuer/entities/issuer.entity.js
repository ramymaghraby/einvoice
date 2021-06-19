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
exports.Issuer = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const typeorm_1 = require("typeorm");
let Issuer = class Issuer {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Issuer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 3 }),
    __metadata("design:type", String)
], Issuer.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Issuer.prototype, "regNum", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], Issuer.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(() => address_entity_1.Address),
    typeorm_1.JoinColumn(),
    __metadata("design:type", address_entity_1.Address)
], Issuer.prototype, "address", void 0);
Issuer = __decorate([
    typeorm_1.Entity('Issuer')
], Issuer);
exports.Issuer = Issuer;
//# sourceMappingURL=issuer.entity.js.map