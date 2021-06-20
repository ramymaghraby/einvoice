import { Repository } from 'typeorm';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
import { TaxableItem } from './entities/taxable-item.entity';
export declare class TaxableItemService {
    private taxableItemRepo;
    constructor(taxableItemRepo: Repository<TaxableItem>);
    create(createTaxableItemDto: CreateTaxableItemDto): Promise<CreateTaxableItemDto & TaxableItem>;
    findAll(): Promise<TaxableItem[]>;
    findOne(id: number): Promise<TaxableItem>;
    update(id: number, updateTaxableItemDto: UpdateTaxableItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
