"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxTypeModule = void 0;
const common_1 = require("@nestjs/common");
const tax_type_service_1 = require("./tax-type.service");
const tax_type_controller_1 = require("./tax-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tax_type_entity_1 = require("./entities/tax-type.entity");
let TaxTypeModule = class TaxTypeModule {
};
TaxTypeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tax_type_entity_1.TaxType])],
        controllers: [tax_type_controller_1.TaxTypeController],
        providers: [tax_type_service_1.TaxTypeService]
    })
], TaxTypeModule);
exports.TaxTypeModule = TaxTypeModule;
//# sourceMappingURL=tax-type.module.js.map