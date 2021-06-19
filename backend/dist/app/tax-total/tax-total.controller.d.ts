import { TaxTotalService } from './tax-total.service';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
export declare class TaxTotalController {
    private readonly taxTotalService;
    constructor(taxTotalService: TaxTotalService);
    create(createTaxTotalDto: CreateTaxTotalDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaxTotalDto: UpdateTaxTotalDto): string;
    remove(id: string): string;
}
