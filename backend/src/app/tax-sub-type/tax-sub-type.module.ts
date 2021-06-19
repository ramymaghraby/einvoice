import { Module } from '@nestjs/common';
import { TaxSubTypeService } from './tax-sub-type.service';
import { TaxSubTypeController } from './tax-sub-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxSubType } from './entities/tax-sub-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaxSubType])],
  controllers: [TaxSubTypeController],
  providers: [TaxSubTypeService]
})
export class TaxSubTypeModule {}
