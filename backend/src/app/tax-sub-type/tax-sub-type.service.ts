import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
import { TaxSubType } from './entities/tax-sub-type.entity';

@Injectable()
export class TaxSubTypeService {
  constructor(@InjectRepository(TaxSubType) private taxSubTypeRepo: Repository<TaxSubType>){}
  create(createTaxSubTypeDto: CreateTaxSubTypeDto) {
    return this.taxSubTypeRepo.save(createTaxSubTypeDto);
  }

  findAll() {
    return this.taxSubTypeRepo.find();
  }

  findOne(id: number) {
    return this.taxSubTypeRepo.findOne(id);
  }

  update(id: number, updateTaxSubTypeDto: UpdateTaxSubTypeDto) {
    return this.taxSubTypeRepo.update(id, updateTaxSubTypeDto);
  }

  remove(id: number) {
    return this.taxSubTypeRepo.delete(id);
  }
}
