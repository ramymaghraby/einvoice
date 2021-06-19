import { Module } from '@nestjs/common';
import { TaxTotalService } from './tax-total.service';
import { TaxTotalController } from './tax-total.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxTotal } from './entities/tax-total.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaxTotal])],
  controllers: [TaxTotalController],
  providers: [TaxTotalService]
})
export class TaxTotalModule {}
