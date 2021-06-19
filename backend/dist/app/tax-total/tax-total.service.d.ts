import { CreateTaxTotalDto } from './dto/create-tax-total.dto';
import { UpdateTaxTotalDto } from './dto/update-tax-total.dto';
export declare class TaxTotalService {
    create(createTaxTotalDto: CreateTaxTotalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaxTotalDto: UpdateTaxTotalDto): string;
    remove(id: number): string;
}
