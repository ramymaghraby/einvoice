"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignaturesModule = void 0;
const common_1 = require("@nestjs/common");
const signatures_service_1 = require("./signatures.service");
const signatures_controller_1 = require("./signatures.controller");
const typeorm_1 = require("@nestjs/typeorm");
const signature_entity_1 = require("./entities/signature.entity");
let SignaturesModule = class SignaturesModule {
};
SignaturesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([signature_entity_1.Signature])],
        controllers: [signatures_controller_1.SignaturesController],
        providers: [signatures_service_1.SignaturesService]
    })
], SignaturesModule);
exports.SignaturesModule = SignaturesModule;
//# sourceMappingURL=signatures.module.js.map