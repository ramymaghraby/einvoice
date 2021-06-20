import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './entities/discount.entity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private discountRepo: Repository<Discount>
  ){}
  create(createDiscountDto: CreateDiscountDto) {
    return this.discountRepo.save(createDiscountDto);
  }

  findAll() {
    return this.discountRepo.find();
  }

  findOne(id: number) {
    return this.discountRepo.findOne(id);
  }

  update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return this.discountRepo.update(id, updateDiscountDto);
  }

  remove(id: number) {
    return `This action removes a #${id} discount`;
  }
}
