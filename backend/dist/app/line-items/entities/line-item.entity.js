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
exports.LineItem = void 0;
const discount_entity_1 = require("../../discount/entities/discount.entity");
const invoice_entity_1 = require("../../invoice/entities/invoice.entity");
const taxable_item_entity_1 = require("../../taxable-item/entities/taxable-item.entity");
const value_entity_1 = require("../../value/entities/value.entity");
const typeorm_1 = require("typeorm");
let LineItem = class LineItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LineItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 300 }),
    __metadata("design:type", String)
], LineItem.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], LineItem.prototype, "itemType", void 0);
__decorate([
    typeorm_1.Column({ length: 40 }),
    __metadata("design:type", String)
], LineItem.prototype, "itemCode", void 0);
__decorate([
    typeorm_1.Column({ length: 5 }),
    __metadata("design:type", String)
], LineItem.prototype, "unitType", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "salesTotal", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "total", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "valueDifference", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "totalTaxableFees", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "netTotal", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], LineItem.prototype, "itemsDiscount", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], LineItem.prototype, "internalCode", void 0);
__decorate([
    typeorm_1.ManyToOne(() => invoice_entity_1.Invoice, (invoice) => invoice.invoiceLines),
    typeorm_1.JoinColumn(),
    __metadata("design:type", invoice_entity_1.Invoice)
], LineItem.prototype, "invoice", void 0);
__decorate([
    typeorm_1.OneToOne(() => discount_entity_1.Discount),
    typeorm_1.JoinColumn(),
    __metadata("design:type", discount_entity_1.Discount)
], LineItem.prototype, "discount", void 0);
__decorate([
    typeorm_1.OneToMany(() => taxable_item_entity_1.TaxableItem, (taxableItems) => taxableItems.lineItem),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Promise)
], LineItem.prototype, "taxableItems", void 0);
__decorate([
    typeorm_1.OneToOne(() => value_entity_1.Value),
    typeorm_1.JoinColumn(),
    __metadata("design:type", value_entity_1.Value)
], LineItem.prototype, "unitValue", void 0);
LineItem = __decorate([
    typeorm_1.Entity('LineItem')
], LineItem);
exports.LineItem = LineItem;
//# sourceMappingURL=line-item.entity.js.map