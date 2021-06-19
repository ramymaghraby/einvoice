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
exports.SignaturesController = void 0;
const common_1 = require("@nestjs/common");
const signatures_service_1 = require("./signatures.service");
const create_signature_dto_1 = require("./dto/create-signature.dto");
const update_signature_dto_1 = require("./dto/update-signature.dto");
const swagger_1 = require("@nestjs/swagger");
let SignaturesController = class SignaturesController {
    constructor(signaturesService) {
        this.signaturesService = signaturesService;
    }
    create(createSignatureDto) {
        return this.signaturesService.create(createSignatureDto);
    }
    findAll() {
        return this.signaturesService.findAll();
    }
    findOne(id) {
        return this.signaturesService.findOne(+id);
    }
    update(id, updateSignatureDto) {
        return this.signaturesService.update(+id, updateSignatureDto);
    }
    remove(id) {
        return this.signaturesService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signature_dto_1.CreateSignatureDto]),
    __metadata("design:returntype", void 0)
], SignaturesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignaturesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignaturesController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_signature_dto_1.UpdateSignatureDto]),
    __metadata("design:returntype", void 0)
], SignaturesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignaturesController.prototype, "remove", null);
SignaturesController = __decorate([
    swagger_1.ApiTags('Signatures'),
    common_1.Controller('signatures'),
    __metadata("design:paramtypes", [signatures_service_1.SignaturesService])
], SignaturesController);
exports.SignaturesController = SignaturesController;
//# sourceMappingURL=signatures.controller.js.map