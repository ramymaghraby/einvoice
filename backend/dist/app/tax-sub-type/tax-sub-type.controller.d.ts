import { TaxSubTypeService } from './tax-sub-type.service';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
export declare class TaxSubTypeController {
    private readonly taxSubTypeService;
    constructor(taxSubTypeService: TaxSubTypeService);
    create(createTaxSubTypeDto: CreateTaxSubTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaxSubTypeDto: UpdateTaxSubTypeDto): string;
    remove(id: string): string;
}
