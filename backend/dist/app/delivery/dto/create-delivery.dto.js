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
exports.CreateDeliveryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDeliveryDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateDeliveryDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "approach", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "packaging", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "dateValidity", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "exportPort", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "countryOfOrigin", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateDeliveryDto.prototype, "grossWeight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateDeliveryDto.prototype, "netWeight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "terms", void 0);
exports.CreateDeliveryDto = CreateDeliveryDto;
//# sourceMappingURL=create-delivery.dto.js.map