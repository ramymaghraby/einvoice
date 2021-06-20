import { TaxTotalService } from './tax-total.service';
import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
export declare class TaxTotalController {
    private readonly taxTotalService;
    constructor(taxTotalService: TaxTotalService);
    create(createTaxTotalDto: CreateTaxTotalDto): Promise<CreateTaxTotalDto & import("./entities/tax-total.entity").TaxTotal>;
    findAll(): Promise<import("./entities/tax-total.entity").TaxTotal[]>;
    findOne(id: string): Promise<import("./entities/tax-total.entity").TaxTotal>;
    update(id: string, updateTaxTotalDto: UpdateTaxTotalDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
