"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueModule = void 0;
const common_1 = require("@nestjs/common");
const value_service_1 = require("./value.service");
const value_controller_1 = require("./value.controller");
const typeorm_1 = require("@nestjs/typeorm");
const value_entity_1 = require("./entities/value.entity");
let ValueModule = class ValueModule {
};
ValueModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([value_entity_1.Value])],
        controllers: [value_controller_1.ValueController],
        providers: [value_service_1.ValueService]
    })
], ValueModule);
exports.ValueModule = ValueModule;
//# sourceMappingURL=value.module.js.map