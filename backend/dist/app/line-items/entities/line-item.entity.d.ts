import { Discount } from "src/app/discount/entities/discount.entity";
import { Invoice } from "src/app/invoice/entities/invoice.entity";
import { TaxableItem } from "src/app/taxable-item/entities/taxable-item.entity";
import { Value } from "src/app/value/entities/value.entity";
export declare class LineItem {
    id: number;
    description: string;
    itemType: string;
    itemCode: string;
    unitType: string;
    quantity: number;
    salesTotal: number;
    total: number;
    valueDifference: number;
    totalTaxableFees: number;
    netTotal: number;
    itemsDiscount: number;
    internalCode: string;
    invoice: Invoice;
    discount?: Discount;
    taxableItems?: Promise<TaxableItem[]>;
    unitValue: Value;
}
