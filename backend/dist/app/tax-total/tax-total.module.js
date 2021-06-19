"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxTotalModule = void 0;
const common_1 = require("@nestjs/common");
const tax_total_service_1 = require("./tax-total.service");
const tax_total_controller_1 = require("./tax-total.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tax_total_entity_1 = require("./entities/tax-total.entity");
let TaxTotalModule = class TaxTotalModule {
};
TaxTotalModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tax_total_entity_1.TaxTotal])],
        controllers: [tax_total_controller_1.TaxTotalController],
        providers: [tax_total_service_1.TaxTotalService]
    })
], TaxTotalModule);
exports.TaxTotalModule = TaxTotalModule;
//# sourceMappingURL=tax-total.module.js.map