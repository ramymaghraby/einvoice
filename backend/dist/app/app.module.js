"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const line_items_module_1 = require("./line-items/line-items.module");
const receiver_module_1 = require("./receiver/receiver.module");
const token_module_1 = require("./token/token.module");
const address_module_1 = require("./address/address.module");
const issuer_module_1 = require("./issuer/issuer.module");
const invoice_module_1 = require("./invoice/invoice.module");
const tax_total_module_1 = require("./tax-total/tax-total.module");
const signatures_module_1 = require("./signatures/signatures.module");
const discount_module_1 = require("./discount/discount.module");
const tax_type_module_1 = require("./tax-type/tax-type.module");
const tax_sub_type_module_1 = require("./tax-sub-type/tax-sub-type.module");
const taxable_item_module_1 = require("./taxable-item/taxable-item.module");
const payment_module_1 = require("./payment/payment.module");
const delivery_module_1 = require("./delivery/delivery.module");
const value_module_1 = require("./value/value.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            token_module_1.TokenModule,
            address_module_1.AddressModule,
            issuer_module_1.IssuerModule,
            line_items_module_1.LineItemsModule,
            receiver_module_1.ReceiverModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'nest',
                password: 'P@ssw0rd',
                database: 'nest',
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
            }),
            common_1.HttpModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'client'),
            }),
            invoice_module_1.InvoiceModule,
            tax_total_module_1.TaxTotalModule,
            signatures_module_1.SignaturesModule,
            discount_module_1.DiscountModule,
            tax_type_module_1.TaxTypeModule,
            tax_sub_type_module_1.TaxSubTypeModule,
            taxable_item_module_1.TaxableItemModule,
            payment_module_1.PaymentModule,
            delivery_module_1.DeliveryModule,
            value_module_1.ValueModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map