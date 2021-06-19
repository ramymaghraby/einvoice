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
exports.Invoice = void 0;
const delivery_entity_1 = require("../../delivery/entities/delivery.entity");
const issuer_entity_1 = require("../../issuer/entities/issuer.entity");
const line_item_entity_1 = require("../../line-items/entities/line-item.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const receiver_entity_1 = require("../../receiver/entities/receiver.entity");
const signature_entity_1 = require("../../signatures/entities/signature.entity");
const tax_total_entity_1 = require("../../tax-total/entities/tax-total.entity");
const typeorm_1 = require("typeorm");
let Invoice = class Invoice {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Invoice.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], Invoice.prototype, "documentType", void 0);
__decorate([
    typeorm_1.Column({ length: 4 }),
    __metadata("design:type", String)
], Invoice.prototype, "documentTypeVersion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Invoice.prototype, "dateTimeIssued", void 0);
__decorate([
    typeorm_1.Column({ length: 9 }),
    __metadata("design:type", String)
], Invoice.prototype, "taxpayerActivityCode", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Invoice.prototype, "internalId", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Invoice.prototype, "purchaseOrderReference", void 0);
__decorate([
    typeorm_1.Column({ length: 300 }),
    __metadata("design:type", String)
], Invoice.prototype, "purchaseOrderDescription", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Invoice.prototype, "salesOrderReference", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], Invoice.prototype, "salesOrderDescription", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], Invoice.prototype, "proformaInvoiceNumber", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "totalSalesAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "totalDiscountAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "netAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "extraDiscountAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "totalItemsDiscountAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], Invoice.prototype, "totalAmount", void 0);
__decorate([
    typeorm_1.OneToOne(() => issuer_entity_1.Issuer),
    typeorm_1.JoinColumn(),
    __metadata("design:type", issuer_entity_1.Issuer)
], Invoice.prototype, "issuer", void 0);
__decorate([
    typeorm_1.OneToOne(() => receiver_entity_1.Receiver),
    typeorm_1.JoinColumn(),
    __metadata("design:type", receiver_entity_1.Receiver)
], Invoice.prototype, "receiver", void 0);
__decorate([
    typeorm_1.OneToMany(() => line_item_entity_1.LineItem, (lineItems) => lineItems.invoice),
    __metadata("design:type", Promise)
], Invoice.prototype, "invoiceLines", void 0);
__decorate([
    typeorm_1.OneToOne(() => signature_entity_1.Signature),
    typeorm_1.JoinColumn(),
    __metadata("design:type", signature_entity_1.Signature)
], Invoice.prototype, "signatures", void 0);
__decorate([
    typeorm_1.OneToMany(() => tax_total_entity_1.TaxTotal, (taxTotal) => taxTotal),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Promise)
], Invoice.prototype, "taxTotal", void 0);
__decorate([
    typeorm_1.OneToOne(() => payment_entity_1.Payment),
    typeorm_1.JoinColumn(),
    __metadata("design:type", payment_entity_1.Payment)
], Invoice.prototype, "payment", void 0);
__decorate([
    typeorm_1.OneToOne(() => delivery_entity_1.Delivery),
    typeorm_1.JoinColumn(),
    __metadata("design:type", delivery_entity_1.Delivery)
], Invoice.prototype, "delivery", void 0);
Invoice = __decorate([
    typeorm_1.Entity('Invoices')
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.entity.js.map