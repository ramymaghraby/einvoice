export declare class CreateInvoiceDto {
    id?: number;
    documentType: string;
    documentTypeVersion: string;
    dateTimeIssued: Date;
    taxpayerActivityCode: string;
    internalId: string;
    purchaseOrderReference?: string;
    purchaseOrderDescription?: string;
    salesOrderReference?: string;
    salesOrderDescription?: string;
    proformaInvoiceNumber?: string;
    totalSalesAmount: number;
    totalDiscountAmount: number;
    netAmount: number;
    extraDiscountAmount: number;
    totalItemsDiscountAmount: number;
    totalAmount: number;
    issuerId?: number;
    receiverId?: number;
    signaturesId?: number;
    paymentId?: number;
    deliveryId?: number;
}
