import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(@InjectRepository(Delivery) private deliveryRepo: Repository<Delivery>){}
  create(createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryRepo.save(createDeliveryDto);
  }

  findAll() {
    return this.deliveryRepo.find();
  }

  findOne(id: number) {
    return this.deliveryRepo.findOne(id);
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveryRepo.update(id,updateDeliveryDto);
  }

  remove(id: number) {
    return this.deliveryRepo.delete(id);
  }
}
