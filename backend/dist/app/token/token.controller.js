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
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const token_service_1 = require("./token.service");
let TokenController = class TokenController {
    constructor(tokenSrv) {
        this.tokenSrv = tokenSrv;
    }
    getGroupGACAgentData() {
        return this.tokenSrv.getDataFromGacAgent();
    }
    getDolphinData() {
        return this.tokenSrv.getDolphinData();
    }
    getBunkerData() {
        return this.tokenSrv.getBunkerData();
    }
    getTaxAuthDocumentTypes() {
        return this.tokenSrv.getDocumentTypesFromTax();
    }
};
__decorate([
    common_1.Get('/gacAgentSCT'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TokenController.prototype, "getGroupGACAgentData", null);
__decorate([
    common_1.Get('/dolphin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TokenController.prototype, "getDolphinData", null);
__decorate([
    common_1.Get('/bunker'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TokenController.prototype, "getBunkerData", null);
__decorate([
    common_1.Get('/taxAuthDocumentTypes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TokenController.prototype, "getTaxAuthDocumentTypes", null);
TokenController = __decorate([
    swagger_1.ApiTags('data'),
    common_1.Controller('data'),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map