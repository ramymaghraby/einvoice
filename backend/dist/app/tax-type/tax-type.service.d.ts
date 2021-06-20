import { Repository } from 'typeorm';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
import { TaxType } from './entities/tax-type.entity';
export declare class TaxTypeService {
    private taxTypeRepo;
    constructor(taxTypeRepo: Repository<TaxType>);
    create(createTaxTypeDto: CreateTaxTypeDto): Promise<CreateTaxTypeDto & TaxType>;
    findAll(): Promise<TaxType[]>;
    findOne(id: number): Promise<TaxType>;
    update(id: number, updateTaxTypeDto: UpdateTaxTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
