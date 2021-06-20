import { TaxTypeService } from './tax-type.service';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
export declare class TaxTypeController {
    private readonly taxTypeService;
    constructor(taxTypeService: TaxTypeService);
    create(createTaxTypeDto: CreateTaxTypeDto): Promise<CreateTaxTypeDto & import("./entities/tax-type.entity").TaxType>;
    findAll(): Promise<import("./entities/tax-type.entity").TaxType[]>;
    findOne(id: string): Promise<import("./entities/tax-type.entity").TaxType>;
    update(id: string, updateTaxTypeDto: UpdateTaxTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
