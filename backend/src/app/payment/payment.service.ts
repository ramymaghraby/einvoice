import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) private paymentRepo: Repository<Payment>){}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepo.save(createPaymentDto);
  }

  findAll() {
    return this.paymentRepo.find();
  }

  findOne(id: number) {
    return this.paymentRepo.findOne(id);
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentRepo.update(id, updatePaymentDto);
  }

  remove(id: number) {
    return this.paymentRepo.delete(id);
  }
}
