import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFreightDto } from './dto/create-freight.dto';
import { UpdateFreightDto } from './dto/update-freight.dto';
import { Freight } from './entities/freight.entity';

@Injectable()
export class FreightService {
  invoiceNo = 'B-21038'
  constructor(
    @InjectRepository(Freight, 'freight')
    private freightRepo: Repository<Freight>
  ){}
  create(createFreightDto: CreateFreightDto) {
    return 'This action adds a new freight';
  }

  findAll() {
    return this.freightRepo.query(`GetInvoice @InvoiceNo=N'${this.invoiceNo}'`);
  }

  findOne(id: string) {
    return this.freightRepo.query(`GetInvoice @InvoiceNo=N'${id}'`);
  }

  update(id: number, updateFreightDto: UpdateFreightDto) {
    return `This action updates a #${id} freight`;
  }

  remove(id: number) {
    return `This action removes a #${id} freight`;
  }
}
