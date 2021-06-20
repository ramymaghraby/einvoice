import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
import { TaxTotal } from './entities/tax-total.entity';

@Injectable()
export class TaxTotalService {
  constructor(@InjectRepository(TaxTotal) private taxTotalRepo: Repository<TaxTotal>){}
  create(createTaxTotalDto: CreateTaxTotalDto) {
    return this.taxTotalRepo.save(createTaxTotalDto);
  }

  findAll() {
    return this.taxTotalRepo.find();
  }

  findOne(id: number) {
    return this.taxTotalRepo.findOne(id, {relations:["taxType","invoice"]});
  }

  update(id: number, updateTaxTotalDto: UpdateTaxTotalDto) {
    return this.taxTotalRepo.update(id, updateTaxTotalDto);
  }

  remove(id: number) {
    return this.taxTotalRepo.delete(id);
  }
}
