import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
export declare class TaxSubTypeService {
    create(createTaxSubTypeDto: CreateTaxSubTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaxSubTypeDto: UpdateTaxSubTypeDto): string;
    remove(id: number): string;
}
