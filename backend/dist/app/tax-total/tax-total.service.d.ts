import { Repository } from 'typeorm';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
import { TaxTotal } from './entities/tax-total.entity';
export declare class TaxTotalService {
    private taxTotalRepo;
    constructor(taxTotalRepo: Repository<TaxTotal>);
    create(createTaxTotalDto: CreateTaxTotalDto): Promise<CreateTaxTotalDto & TaxTotal>;
    findAll(): Promise<TaxTotal[]>;
    findOne(id: number): Promise<TaxTotal>;
    update(id: number, updateTaxTotalDto: UpdateTaxTotalDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
