import { LineItem } from "src/app/line-items/entities/line-item.entity";
import { TaxSubType } from "src/app/tax-sub-type/entities/tax-sub-type.entity";
import { TaxType } from "src/app/tax-type/entities/tax-type.entity";
export declare class TaxableItem {
    id: number;
    amount: number;
    rate: number;
    lineItem: LineItem;
    taxType: TaxType;
    subType: TaxSubType;
}
