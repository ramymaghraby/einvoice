import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    create(createDiscountDto: CreateDiscountDto): Promise<CreateDiscountDto & import("./entities/discount.entity").Discount>;
    findAll(): Promise<import("./entities/discount.entity").Discount[]>;
    findOne(id: string): Promise<import("./entities/discount.entity").Discount>;
    update(id: string, updateDiscountDto: UpdateDiscountDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
