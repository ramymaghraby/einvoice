export declare class CreateLineItemDto {
    id?: number;
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
    invoiceId?: number;
    discountId?: number;
    unitValueId?: number;
}
