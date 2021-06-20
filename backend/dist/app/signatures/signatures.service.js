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
exports.SignaturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const signature_entity_1 = require("./entities/signature.entity");
let SignaturesService = class SignaturesService {
    constructor(signatureRepo) {
        this.signatureRepo = signatureRepo;
    }
    create(createSignatureDto) {
        return this.signatureRepo.save(createSignatureDto);
    }
    findAll() {
        return this.signatureRepo.find();
    }
    findOne(id) {
        return this.signatureRepo.findOne(id);
    }
    update(id, updateSignatureDto) {
        return this.signatureRepo.update(id, updateSignatureDto);
    }
    remove(id) {
        return this.signatureRepo.delete(id);
    }
};
SignaturesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(signature_entity_1.Signature)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SignaturesService);
exports.SignaturesService = SignaturesService;
//# sourceMappingURL=signatures.service.js.map