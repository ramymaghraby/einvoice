"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxSubTypeModule = void 0;
const common_1 = require("@nestjs/common");
const tax_sub_type_service_1 = require("./tax-sub-type.service");
const tax_sub_type_controller_1 = require("./tax-sub-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tax_sub_type_entity_1 = require("./entities/tax-sub-type.entity");
let TaxSubTypeModule = class TaxSubTypeModule {
};
TaxSubTypeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tax_sub_type_entity_1.TaxSubType])],
        controllers: [tax_sub_type_controller_1.TaxSubTypeController],
        providers: [tax_sub_type_service_1.TaxSubTypeService]
    })
], TaxSubTypeModule);
exports.TaxSubTypeModule = TaxSubTypeModule;
//# sourceMappingURL=tax-sub-type.module.js.map