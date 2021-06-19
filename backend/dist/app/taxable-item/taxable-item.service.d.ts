import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
export declare class TaxableItemService {
    create(createTaxableItemDto: CreateTaxableItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaxableItemDto: UpdateTaxableItemDto): string;
    remove(id: number): string;
}
