import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
export declare class TaxTypeService {
    create(createTaxTypeDto: CreateTaxTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaxTypeDto: UpdateTaxTypeDto): string;
    remove(id: number): string;
}
