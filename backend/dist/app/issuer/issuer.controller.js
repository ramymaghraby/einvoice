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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuerController = void 0;
const common_1 = require("@nestjs/common");
const issuer_service_1 = require("./issuer.service");
const create_issuer_dto_1 = require("./dto/create-issuer.dto");
const update_issuer_dto_1 = require("./dto/update-issuer.dto");
const swagger_1 = require("@nestjs/swagger");
let IssuerController = class IssuerController {
    constructor(issuerService) {
        this.issuerService = issuerService;
    }
    create(createIssuerDto) {
        return this.issuerService.create(createIssuerDto);
    }
    findAll() {
        return this.issuerService.findAll();
    }
    findOne(id) {
        return this.issuerService.findOne(+id);
    }
    update(id, updateIssuerDto) {
        return this.issuerService.update(+id, updateIssuerDto);
    }
    remove(id) {
        return this.issuerService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_issuer_dto_1.CreateIssuerDto]),
    __metadata("design:returntype", void 0)
], IssuerController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IssuerController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuerController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_issuer_dto_1.UpdateIssuerDto]),
    __metadata("design:returntype", void 0)
], IssuerController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssuerController.prototype, "remove", null);
IssuerController = __decorate([
    swagger_1.ApiTags('Issuer'),
    common_1.Controller('issuer'),
    __metadata("design:paramtypes", [issuer_service_1.IssuerService])
], IssuerController);
exports.IssuerController = IssuerController;
//# sourceMappingURL=issuer.controller.js.map