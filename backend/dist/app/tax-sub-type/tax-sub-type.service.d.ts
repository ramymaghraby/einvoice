import { Repository } from 'typeorm';
import { CreateTaxSubTypeDto } from './dto/create-tax-sub-type.dto';
import { UpdateTaxSubTypeDto } from './dto/update-tax-sub-type.dto';
import { TaxSubType } from './entities/tax-sub-type.entity';
export declare class TaxSubTypeService {
    private taxSubTypeRepo;
    constructor(taxSubTypeRepo: Repository<TaxSubType>);
    create(createTaxSubTypeDto: CreateTaxSubTypeDto): Promise<CreateTaxSubTypeDto & TaxSubType>;
    findAll(): Promise<TaxSubType[]>;
    findOne(id: number): Promise<TaxSubType>;
    update(id: number, updateTaxSubTypeDto: UpdateTaxSubTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
