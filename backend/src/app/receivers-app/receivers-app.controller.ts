import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiversAppService } from './receivers-app.service';
import { CreateReceiversAppDto } from './dto/create-receivers-app.dto';
import { UpdateReceiversAppDto } from './dto/update-receivers-app.dto';

@Controller('receivers-app')
export class ReceiversAppController {
  constructor(private readonly receiversAppService: ReceiversAppService) {}

  @Post()
  create(@Body() createReceiversAppDto: CreateReceiversAppDto) {
    return this.receiversAppService.create(createReceiversAppDto);
  }

  @Get()
  findAll() {
    return this.receiversAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiversAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiversAppDto: UpdateReceiversAppDto) {
    return this.receiversAppService.update(+id, updateReceiversAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiversAppService.remove(+id);
  }
}
