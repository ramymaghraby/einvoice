import { Injectable } from '@nestjs/common';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';

@Injectable()
export class TaxableItemService {
  create(createTaxableItemDto: CreateTaxableItemDto) {
    return 'This action adds a new taxableItem';
  }

  findAll() {
    return `This action returns all taxableItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxableItem`;
  }

  update(id: number, updateTaxableItemDto: UpdateTaxableItemDto) {
    return `This action updates a #${id} taxableItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxableItem`;
  }
}
