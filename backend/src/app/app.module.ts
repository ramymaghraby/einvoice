import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LineItemsModule } from 'src/app/line-items/line-items.module';
import { ReceiverModule } from 'src/app/receiver/receiver.module';
import { TokenModule } from './token/token.module';
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

@Module({
  imports: [
    TokenModule,
    AddressModule,
    IssuerModule,
    LineItemsModule,
    ReceiverModule,
    TypeOrmModule.forRoot({
      type: 'mysql', //mysql
      host: 'localhost',
      port: 3306, //3306
      username: 'nest',
      password: 'P@ssw0rd',
      database: 'nest',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
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
