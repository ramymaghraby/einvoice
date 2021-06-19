import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxableItemService } from './taxable-item.service';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Taxable Items')
@Controller('taxable-item')
export class TaxableItemController {
  constructor(private readonly taxableItemService: TaxableItemService) {}

  @Post()
  create(@Body() createTaxableItemDto: CreateTaxableItemDto) {
    return this.taxableItemService.create(createTaxableItemDto);
  }

  @Get()
  findAll() {
    return this.taxableItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxableItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxableItemDto: UpdateTaxableItemDto) {
    return this.taxableItemService.update(+id, updateTaxableItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxableItemService.remove(+id);
  }
}
