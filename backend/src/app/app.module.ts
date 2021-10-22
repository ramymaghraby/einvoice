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
import { Address } from './address/entities/address.entity';
import { Delivery } from './delivery/entities/delivery.entity';
import { Discount } from './discount/entities/discount.entity';
import { Invoice } from './invoice/entities/invoice.entity';
import { Issuer } from './issuer/entities/issuer.entity';
import { LineItem } from './line-items/entities/line-item.entity';
import { Payment } from './payment/entities/payment.entity';
import { Receiver } from './receiver/entities/receiver.entity';
import { Signature } from './signatures/entities/signature.entity';
import { TaxSubType } from './tax-sub-type/entities/tax-sub-type.entity';
import { TaxTotal } from './tax-total/entities/tax-total.entity';
import { TaxType } from './tax-type/entities/tax-type.entity';
import { TaxableItem } from './taxable-item/entities/taxable-item.entity';
import { Value } from './value/entities/value.entity';

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
      host: 'localhost', // process.env.DEF_DATABASE_HOST,
      port: 3306, // 1433, //3306
      username: 'nest',// process.env.DEF_DATABASE_USER,
      password: 'P@ssw0rd',//process.env.DEF_DATABASE_PASSWORD,
      database: 'greenops',//process.env.DEF_DATABASE_NAME,
      synchronize: false,
      logging: true,
      autoLoadEntities: true,
      dropSchema: false,
      // migrations: ["dist/migrations/*{.ts,.js}"],
      // migrationsTableName: "migrations_typeorm",
      // migrationsRun: true
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
