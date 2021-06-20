import { Repository } from 'typeorm';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './entities/discount.entity';
export declare class DiscountService {
    private discountRepo;
    constructor(discountRepo: Repository<Discount>);
    create(createDiscountDto: CreateDiscountDto): Promise<CreateDiscountDto & Discount>;
    findAll(): Promise<Discount[]>;
    findOne(id: number): Promise<Discount>;
    update(id: number, updateDiscountDto: UpdateDiscountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
