import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLineItemDto } from './dto/create-line-item.dto';
import { UpdateLineItemDto } from './dto/update-line-item.dto';
import { LineItem } from './entities/line-item.entity';

@Injectable()
export class LineItemsService {
  constructor(@InjectRepository(LineItem) private lineItemRepo: Repository<LineItem>){}
  create(createLineItemDto: CreateLineItemDto) {
    return this.lineItemRepo.save(createLineItemDto);
  }

  findAll() {
    return this.lineItemRepo.find();
  }

  count() {
    return this.lineItemRepo.findAndCount()
  }

  findOne(id: number) {
    return this.lineItemRepo.findOne(id, {relations:["invoice", "discount", "taxableItem", "unitValue"]});
  }

  update(id: number, updateLineItemDto: UpdateLineItemDto) {
    return this.lineItemRepo.update(id, updateLineItemDto);
  }

  remove(id: number) {
    return this.lineItemRepo.delete(id);
  }
}
