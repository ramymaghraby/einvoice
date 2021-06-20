import { TaxSubTypeService } from './tax-sub-type.service';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
export declare class TaxSubTypeController {
    private readonly taxSubTypeService;
    constructor(taxSubTypeService: TaxSubTypeService);
    create(createTaxSubTypeDto: CreateTaxSubTypeDto): Promise<CreateTaxSubTypeDto & import("./entities/tax-sub-type.entity").TaxSubType>;
    findAll(): Promise<import("./entities/tax-sub-type.entity").TaxSubType[]>;
    findOne(id: string): Promise<import("./entities/tax-sub-type.entity").TaxSubType>;
    update(id: string, updateTaxSubTypeDto: UpdateTaxSubTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
