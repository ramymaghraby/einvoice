"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemsService = void 0;
const common_1 = require("@nestjs/common");
let LineItemsService = class LineItemsService {
    create(createLineItemDto) {
        return 'This action adds a new lineItem';
    }
    findAll() {
        return `This action returns all lineItems`;
    }
    findOne(id) {
        return `This action returns a #${id} lineItem`;
    }
    update(id, updateLineItemDto) {
        return `This action updates a #${id} lineItem`;
    }
    remove(id) {
        return `This action removes a #${id} lineItem`;
    }
};
LineItemsService = __decorate([
    common_1.Injectable()
], LineItemsService);
exports.LineItemsService = LineItemsService;
//# sourceMappingURL=line-items.service.js.map