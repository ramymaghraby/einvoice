import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
export declare class PaymentService {
    private paymentRepo;
    constructor(paymentRepo: Repository<Payment>);
    create(createPaymentDto: CreatePaymentDto): Promise<CreatePaymentDto & Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
