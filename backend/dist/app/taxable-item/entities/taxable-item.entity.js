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
exports.TaxableItem = void 0;
const line_item_entity_1 = require("../../line-items/entities/line-item.entity");
const tax_sub_type_entity_1 = require("../../tax-sub-type/entities/tax-sub-type.entity");
const tax_type_entity_1 = require("../../tax-type/entities/tax-type.entity");
const typeorm_1 = require("typeorm");
let TaxableItem = class TaxableItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaxableItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], TaxableItem.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10, scale: 4 }),
    __metadata("design:type", Number)
], TaxableItem.prototype, "rate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => line_item_entity_1.LineItem),
    __metadata("design:type", line_item_entity_1.LineItem)
], TaxableItem.prototype, "lineItem", void 0);
__decorate([
    typeorm_1.OneToOne(() => tax_type_entity_1.TaxType),
    typeorm_1.JoinColumn(),
    __metadata("design:type", tax_type_entity_1.TaxType)
], TaxableItem.prototype, "taxType", void 0);
__decorate([
    typeorm_1.OneToOne(() => tax_sub_type_entity_1.TaxSubType),
    typeorm_1.JoinColumn(),
    __metadata("design:type", tax_sub_type_entity_1.TaxSubType)
], TaxableItem.prototype, "subType", void 0);
TaxableItem = __decorate([
    typeorm_1.Entity('TaxableItems')
], TaxableItem);
exports.TaxableItem = TaxableItem;
//# sourceMappingURL=taxable-item.entity.js.map