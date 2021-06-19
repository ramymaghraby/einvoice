import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountService {
    create(createDiscountDto: CreateDiscountDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDiscountDto: UpdateDiscountDto): string;
    remove(id: number): string;
}
