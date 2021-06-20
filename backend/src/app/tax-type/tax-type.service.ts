import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
import { TaxType } from './entities/tax-type.entity';

@Injectable()
export class TaxTypeService {
  constructor(@InjectRepository(TaxType) private taxTypeRepo: Repository<TaxType>){}
  create(createTaxTypeDto: CreateTaxTypeDto) {
    return this.taxTypeRepo.save(createTaxTypeDto);
  }

  findAll() {
    return this.taxTypeRepo.find();
  }

  findOne(id: number) {
    return this.taxTypeRepo.findOne(id);
  }

  update(id: number, updateTaxTypeDto: UpdateTaxTypeDto) {
    return this.taxTypeRepo.update(id, updateTaxTypeDto);
  }

  remove(id: number) {
    return this.taxTypeRepo.delete(id);
  }
}
