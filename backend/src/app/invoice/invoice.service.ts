import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(@InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>){}
  create(createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceRepo.save(createInvoiceDto);
  }

  findAll() {
    return this.invoiceRepo.find();
  }

  findOne(id: number) {
    return this.invoiceRepo.findOne(id, {relations: ["issuer", "receiver", "invoiceLines", "invoiceLines.discount","invoiceLines.taxableItems","invoiceLines.unitValue","signatures", "taxTotal", "payment","delivery"]});
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceRepo.update(id,updateInvoiceDto);
  }

  remove(id: number) {
    return this.invoiceRepo.delete(id);
  }
}
