import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LineItemsModule } from 'src/app/line-items/line-items.module';
import { ReceiverModule } from 'src/app/receiver/receiver.module';
import { IntegrationModule } from './integration-data/integration-data.module';
import { AddressModule } from './address/address.module';
import { IssuerModule } from './issuer/issuer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { TaxTotalModule } from './tax-total/tax-total.module';
import { SignaturesModule } from './signatures/signatures.module';
import { DiscountModule } from './discount/discount.module';
import { TaxTypeModule } from './tax-type/tax-type.module';
import { TaxSubTypeModule } from './tax-sub-type/tax-sub-type.module';
import { TaxableItemModule } from './taxable-item/taxable-item.module';
import { PaymentModule } from './payment/payment.module';
import { DeliveryModule } from './delivery/delivery.module';
import { ValueModule } from './value/value.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IntegrationModule,
    AddressModule,
    IssuerModule,
    LineItemsModule,
    ReceiverModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql', //'mssql', //mysql
      host: process.env.DEF_DATABASE_HOST,
      port: 3306, // 1433, //3306
      username: process.env.DEF_DATABASE_USER,
      password: process.env.DEF_DATABASE_PASSWORD,
      database: process.env.DEF_DATABASE_NAME,
      synchronize: false,
      logging: true,
      autoLoadEntities: true,
      // options: {
      //   encrypt: false
      // }
    }),
    HttpModule,
    InvoiceModule,
    TaxTotalModule,
    SignaturesModule,
    DiscountModule,
    TaxTypeModule,
    TaxSubTypeModule,
    TaxableItemModule,
    PaymentModule,
    DeliveryModule,
    ValueModule,
  ],
})
export class AppModule {}
