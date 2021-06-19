"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
let InvoiceService = class InvoiceService {
    create(createInvoiceDto) {
        return 'This action adds a new invoice';
    }
    findAll() {
        return `This action returns all invoice`;
    }
    findOne(id) {
        return `This action returns a #${id} invoice`;
    }
    update(id, updateInvoiceDto) {
        return `This action updates a #${id} invoice`;
    }
    remove(id) {
        return `This action removes a #${id} invoice`;
    }
};
InvoiceService = __decorate([
    common_1.Injectable()
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map