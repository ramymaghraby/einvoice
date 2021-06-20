import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    create(createInvoiceDto: CreateInvoiceDto): Promise<CreateInvoiceDto & import("./entities/invoice.entity").Invoice>;
    findAll(): Promise<import("./entities/invoice.entity").Invoice[]>;
    findOne(id: string): Promise<import("./entities/invoice.entity").Invoice>;
    update(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
