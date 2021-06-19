import { TaxTypeService } from './tax-type.service';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
export declare class TaxTypeController {
    private readonly taxTypeService;
    constructor(taxTypeService: TaxTypeService);
    create(createTaxTypeDto: CreateTaxTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaxTypeDto: UpdateTaxTypeDto): string;
    remove(id: string): string;
}
