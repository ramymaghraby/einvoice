"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemsModule = void 0;
const common_1 = require("@nestjs/common");
const line_items_service_1 = require("./line-items.service");
const line_items_controller_1 = require("./line-items.controller");
const typeorm_1 = require("@nestjs/typeorm");
const line_item_entity_1 = require("./entities/line-item.entity");
let LineItemsModule = class LineItemsModule {
};
LineItemsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([line_item_entity_1.LineItem])],
        controllers: [line_items_controller_1.LineItemsController],
        providers: [line_items_service_1.LineItemsService]
    })
], LineItemsModule);
exports.LineItemsModule = LineItemsModule;
//# sourceMappingURL=line-items.module.js.map