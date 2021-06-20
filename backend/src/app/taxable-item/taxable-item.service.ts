import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
import { TaxableItem } from './entities/taxable-item.entity';

@Injectable()
export class TaxableItemService {
  constructor(@InjectRepository(TaxableItem) private taxableItemRepo: Repository<TaxableItem>){}
  create(createTaxableItemDto: CreateTaxableItemDto) {
    return this.taxableItemRepo.save(createTaxableItemDto);
  }

  findAll() {
    return this.taxableItemRepo.find();
  }

  findOne(id: number) {
    return this.taxableItemRepo.findOne(id, {relations:["lineItem","taxType","subType"]});
  }

  update(id: number, updateTaxableItemDto: UpdateTaxableItemDto) {
    return this.taxableItemRepo.update(id, updateTaxableItemDto);
  }

  remove(id: number) {
    return this.taxableItemRepo.delete(id);
  }
}
