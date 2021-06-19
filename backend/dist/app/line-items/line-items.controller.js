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
exports.LineItemsController = void 0;
const common_1 = require("@nestjs/common");
const line_items_service_1 = require("./line-items.service");
const create_line_item_dto_1 = require("./dto/create-line-item.dto");
const update_line_item_dto_1 = require("./dto/update-line-item.dto");
const swagger_1 = require("@nestjs/swagger");
let LineItemsController = class LineItemsController {
    constructor(lineItemsService) {
        this.lineItemsService = lineItemsService;
    }
    create(createLineItemDto) {
        return this.lineItemsService.create(createLineItemDto);
    }
    findAll() {
        return this.lineItemsService.findAll();
    }
    findOne(id) {
        return this.lineItemsService.findOne(+id);
    }
    update(id, updateLineItemDto) {
        return this.lineItemsService.update(+id, updateLineItemDto);
    }
    remove(id) {
        return this.lineItemsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_line_item_dto_1.CreateLineItemDto]),
    __metadata("design:returntype", void 0)
], LineItemsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LineItemsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LineItemsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_line_item_dto_1.UpdateLineItemDto]),
    __metadata("design:returntype", void 0)
], LineItemsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LineItemsController.prototype, "remove", null);
LineItemsController = __decorate([
    swagger_1.ApiTags('Line Items'),
    common_1.Controller('line-items'),
    __metadata("design:paramtypes", [line_items_service_1.LineItemsService])
], LineItemsController);
exports.LineItemsController = LineItemsController;
//# sourceMappingURL=line-items.controller.js.map