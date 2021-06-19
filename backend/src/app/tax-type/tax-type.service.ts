import { Injectable } from '@nestjs/common';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';

@Injectable()
export class TaxTypeService {
  create(createTaxTypeDto: CreateTaxTypeDto) {
    return 'This action adds a new taxType';
  }

  findAll() {
    return `This action returns all taxType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxType`;
  }

  update(id: number, updateTaxTypeDto: UpdateTaxTypeDto) {
    return `This action updates a #${id} taxType`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxType`;
  }
}
