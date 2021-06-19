import { Module } from '@nestjs/common';
import { LineItemsService } from './line-items.service';
import { LineItemsController } from './line-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineItem } from './entities/line-item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LineItem])],
  controllers: [LineItemsController],
  providers: [LineItemsService]
})
export class LineItemsModule {}
