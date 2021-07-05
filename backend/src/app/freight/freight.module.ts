import { Module } from '@nestjs/common';
import { FreightService } from './freight.service';
import { FreightController } from './freight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Freight } from './entities/freight.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Freight], 'freight')],
  controllers: [FreightController],
  providers: [FreightService]
})
export class FreightModule {}
