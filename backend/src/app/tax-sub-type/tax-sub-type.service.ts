import { Injectable } from '@nestjs/common';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';

@Injectable()
export class TaxSubTypeService {
  create(createTaxSubTypeDto: CreateTaxSubTypeDto) {
    return 'This action adds a new taxSubType';
  }

  findAll() {
    return `This action returns all taxSubType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxSubType`;
  }

  update(id: number, updateTaxSubTypeDto: UpdateTaxSubTypeDto) {
    return `This action updates a #${id} taxSubType`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxSubType`;
  }
}
