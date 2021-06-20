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
exports.CreateInvoiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateInvoiceDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "documentType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "documentTypeVersion", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateInvoiceDto.prototype, "dateTimeIssued", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "taxpayerActivityCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "internalId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "purchaseOrderReference", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "purchaseOrderDescription", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "salesOrderReference", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "salesOrderDescription", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "proformaInvoiceNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalSalesAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalDiscountAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "netAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "extraDiscountAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalItemsDiscountAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalAmount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "issuerId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "receiverId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "signaturesId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "paymentId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "deliveryId", void 0);
exports.CreateInvoiceDto = CreateInvoiceDto;
//# sourceMappingURL=create-invoice.dto.js.map