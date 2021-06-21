import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
import { Value } from './entities/value.entity';

@Injectable()
export class ValueService {
  constructor(@InjectRepository(Value) private valueRepo: Repository<Value>){}
  create(createValueDto: CreateValueDto) {
    return this.valueRepo.save(createValueDto);
  }

  findAll() {
    return this.valueRepo.find();
  }

  findOne(id: number) {
    return this.valueRepo.findOne(id);
  }

  update(id: number, updateValueDto: UpdateValueDto) {
    return this.valueRepo.update(id, updateValueDto);
  }

  remove(id: number) {    
    return this.valueRepo.delete(id);
  }
}
