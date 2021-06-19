import { Module } from '@nestjs/common';
import { TaxableItemService } from './taxable-item.service';
import { TaxableItemController } from './taxable-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxableItem } from './entities/taxable-item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaxableItem])],
  controllers: [TaxableItemController],
  providers: [TaxableItemService]
})
export class TaxableItemModule {}
