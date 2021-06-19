import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxTotalService } from './tax-total.service';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tax Total')
@Controller('tax-total')
export class TaxTotalController {
  constructor(private readonly taxTotalService: TaxTotalService) {}

  @Post()
  create(@Body() createTaxTotalDto: CreateTaxTotalDto) {
    return this.taxTotalService.create(createTaxTotalDto);
  }

  @Get()
  findAll() {
    return this.taxTotalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxTotalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxTotalDto: UpdateTaxTotalDto) {
    return this.taxTotalService.update(+id, updateTaxTotalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxTotalService.remove(+id);
  }
}
