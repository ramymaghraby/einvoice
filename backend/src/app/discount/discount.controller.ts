import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@ApiTags('Discount')
@Controller('Discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  @ApiResponse({status: 201, type: CreateDiscountDto, description: "Creates a Discount"})
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountService.create(createDiscountDto);
  }

  @Get()
  @ApiResponse({status: 200, type: CreateDiscountDto, description:"Returns all Discounts"})
  findAll() {
    return this.discountService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, type: CreateDiscountDto, description:"Returns a Discount by id"})
  findOne(@Param('id') id: string) {
    return this.discountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: UpdateDiscountDto) {
    return this.discountService.update(+id, updateDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountService.remove(+id);
  }
}
