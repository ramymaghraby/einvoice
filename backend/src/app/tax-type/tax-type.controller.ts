import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxTypeService } from './tax-type.service';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tax Type')
@Controller('tax-type')
export class TaxTypeController {
  constructor(private readonly taxTypeService: TaxTypeService) {}

  @Post()
  create(@Body() createTaxTypeDto: CreateTaxTypeDto) {
    return this.taxTypeService.create(createTaxTypeDto);
  }

  @Get()
  findAll() {
    return this.taxTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxTypeDto: UpdateTaxTypeDto) {
    return this.taxTypeService.update(+id, updateTaxTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxTypeService.remove(+id);
  }
}
