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
exports.TaxTotal = void 0;
const invoice_entity_1 = require("../../invoice/entities/invoice.entity");
const tax_type_entity_1 = require("../../tax-type/entities/tax-type.entity");
const typeorm_1 = require("typeorm");
let TaxTotal = class TaxTotal {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaxTotal.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => tax_type_entity_1.TaxType),
    typeorm_1.JoinColumn(),
    __metadata("design:type", tax_type_entity_1.TaxType)
], TaxTotal.prototype, "taxType", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], TaxTotal.prototype, "amount", void 0);
__decorate([
    typeorm_1.ManyToOne(() => invoice_entity_1.Invoice, (invoice) => invoice.taxTotal),
    __metadata("design:type", invoice_entity_1.Invoice)
], TaxTotal.prototype, "invoice", void 0);
TaxTotal = __decorate([
    typeorm_1.Entity('TaxTotal')
], TaxTotal);
exports.TaxTotal = TaxTotal;
//# sourceMappingURL=tax-total.entity.js.map