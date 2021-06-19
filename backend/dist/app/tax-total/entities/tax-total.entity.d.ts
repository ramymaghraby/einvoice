import { Invoice } from "src/app/invoice/entities/invoice.entity";
import { TaxType } from "src/app/tax-type/entities/tax-type.entity";
export declare class TaxTotal {
    id: number;
    taxType: TaxType;
    amount: number;
    invoice: Invoice;
}
