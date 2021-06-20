import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
export declare class InvoiceService {
    private invoiceRepo;
    constructor(invoiceRepo: Repository<Invoice>);
    create(createInvoiceDto: CreateInvoiceDto): Promise<CreateInvoiceDto & Invoice>;
    findAll(): Promise<Invoice[]>;
    findOne(id: number): Promise<Invoice>;
    update(id: number, updateInvoiceDto: UpdateInvoiceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
