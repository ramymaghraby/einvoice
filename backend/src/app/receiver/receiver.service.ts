import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { Receiver } from './entities/receiver.entity';

@Injectable()
export class ReceiverService {
  constructor(@InjectRepository(Receiver) private receiverRepo: Repository<Receiver>){}
  create(createReceiverDto: CreateReceiverDto) {
    return this.receiverRepo.save(createReceiverDto);
  }

  findAll() {
    return this.receiverRepo.find();
  }

  findOne(id: number) {
    return this.receiverRepo.findOne(id, {relations:["address"]});
  }

  update(id: number, updateReceiverDto: UpdateReceiverDto) {
    return this.receiverRepo.update(id, updateReceiverDto);
  }

  remove(id: number) {
    return this.receiverRepo.delete(id);
  }
}
