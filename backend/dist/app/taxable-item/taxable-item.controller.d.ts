import { TaxableItemService } from './taxable-item.service';
import { CreateTaxableItemDto } from './dto/create-taxable-item.dto';
import { UpdateTaxableItemDto } from './dto/update-taxable-item.dto';
export declare class TaxableItemController {
    private readonly taxableItemService;
    constructor(taxableItemService: TaxableItemService);
    create(createTaxableItemDto: CreateTaxableItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaxableItemDto: UpdateTaxableItemDto): string;
    remove(id: string): string;
}
