import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThan, Repository } from 'typeorm';
import { CreateReceiversAppDto } from './dto/create-receivers-app.dto';
import { UpdateReceiversAppDto } from './dto/update-receivers-app.dto';
import { ReceiversApp } from './entities/receivers-app.entity';

@Injectable()
export class ReceiversAppService {
  constructor(
    @InjectRepository(ReceiversApp, 'receivers')
    private receiversAppRepo: Repository<ReceiversApp>
    
  ){}
  
  create(createReceiversAppDto: CreateReceiversAppDto) {
    return 'This action adds a new receiversApp';
  }

  findAll() {
    return this.receiversAppRepo.find({where: {'Invoice Date': Between('2021-06-01', '2021-06-10') }});
  }

  findOne(id: number) {
    return `This action returns a #${id} receiversApp`;
  }

  update(id: number, updateReceiversAppDto: UpdateReceiversAppDto) {
    return `This action updates a #${id} receiversApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiversApp`;
  }
}
