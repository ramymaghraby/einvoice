import { Module } from '@nestjs/common';
import { ReceiversAppService } from './receivers-app.service';
import { ReceiversAppController } from './receivers-app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiversApp } from './entities/receivers-app.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ReceiversApp],'receivers')],
  controllers: [ReceiversAppController],
  providers: [ReceiversAppService]
})
export class ReceiversAppModule {}
