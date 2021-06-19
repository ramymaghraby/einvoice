import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    create(createDiscountDto: CreateDiscountDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDiscountDto: UpdateDiscountDto): string;
    remove(id: string): string;
}
