import { Injectable } from '@nestjs/common';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';

@Injectable()
export class TaxTotalService {
  create(createTaxTotalDto: CreateTaxTotalDto) {
    return 'This action adds a new taxTotal';
  }

  findAll() {
    return `This action returns all taxTotal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxTotal`;
  }

  update(id: number, updateTaxTotalDto: UpdateTaxTotalDto) {
    return `This action updates a #${id} taxTotal`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxTotal`;
  }
}
