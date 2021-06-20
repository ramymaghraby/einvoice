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
exports.IntegrationDataController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const integration_data_service_1 = require("./integration-data.service");
let IntegrationDataController = class IntegrationDataController {
    constructor(integrationDataService) {
        this.integrationDataService = integrationDataService;
    }
    getGroupGACAgentData() {
        return this.integrationDataService.getDataFromGacAgent();
    }
    getDolphinData() {
        return this.integrationDataService.getDolphinData();
    }
    getBunkerData() {
        return this.integrationDataService.getBunkerData();
    }
    getTaxAuthDocumentTypes() {
        return this.integrationDataService.getDocumentTypesFromTax();
    }
};
__decorate([
    common_1.Get('/gacAgentSCT'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationDataController.prototype, "getGroupGACAgentData", null);
__decorate([
    common_1.Get('/dolphin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationDataController.prototype, "getDolphinData", null);
__decorate([
    common_1.Get('/bunker'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationDataController.prototype, "getBunkerData", null);
__decorate([
    common_1.Get('/taxAuthDocumentTypes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntegrationDataController.prototype, "getTaxAuthDocumentTypes", null);
IntegrationDataController = __decorate([
    swagger_1.ApiTags('Integration Data'),
    common_1.Controller('integration-data'),
    __metadata("design:paramtypes", [integration_data_service_1.IntegrationDataService])
], IntegrationDataController);
exports.IntegrationDataController = IntegrationDataController;
//# sourceMappingURL=integration-data.controller.js.map