"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxableItemModule = void 0;
const common_1 = require("@nestjs/common");
const taxable_item_service_1 = require("./taxable-item.service");
const taxable_item_controller_1 = require("./taxable-item.controller");
const typeorm_1 = require("@nestjs/typeorm");
const taxable_item_entity_1 = require("./entities/taxable-item.entity");
let TaxableItemModule = class TaxableItemModule {
};
TaxableItemModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([taxable_item_entity_1.TaxableItem])],
        controllers: [taxable_item_controller_1.TaxableItemController],
        providers: [taxable_item_service_1.TaxableItemService]
    })
], TaxableItemModule);
exports.TaxableItemModule = TaxableItemModule;
//# sourceMappingURL=taxable-item.module.js.map