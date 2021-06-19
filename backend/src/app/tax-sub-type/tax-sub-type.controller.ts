import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxSubTypeService } from './tax-sub-type.service';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tax Sub Type')
@Controller('tax-sub-type')
export class TaxSubTypeController {
  constructor(private readonly taxSubTypeService: TaxSubTypeService) {}

  @Post()
  create(@Body() createTaxSubTypeDto: CreateTaxSubTypeDto) {
    return this.taxSubTypeService.create(createTaxSubTypeDto);
  }

  @Get()
  findAll() {
    return this.taxSubTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxSubTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxSubTypeDto: UpdateTaxSubTypeDto) {
    return this.taxSubTypeService.update(+id, updateTaxSubTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxSubTypeService.remove(+id);
  }
}
