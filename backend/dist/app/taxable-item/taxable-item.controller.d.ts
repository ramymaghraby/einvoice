import { TaxableItemService } from './taxable-item.service';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
export declare class TaxableItemController {
    private readonly taxableItemService;
    constructor(taxableItemService: TaxableItemService);
    create(createTaxableItemDto: CreateTaxableItemDto): Promise<CreateTaxableItemDto & import("./entities/taxable-item.entity").TaxableItem>;
    findAll(): Promise<import("./entities/taxable-item.entity").TaxableItem[]>;
    findOne(id: string): Promise<import("./entities/taxable-item.entity").TaxableItem>;
    update(id: string, updateTaxableItemDto: UpdateTaxableItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
