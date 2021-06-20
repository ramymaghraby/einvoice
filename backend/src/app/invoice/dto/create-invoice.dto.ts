import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    documentType: string;

    @ApiProperty()
    documentTypeVersion: string;

    @ApiProperty()
    dateTimeIssued: Date;

    @ApiProperty()
    taxpayerActivityCode: string;

    @ApiProperty()
    internalId: string;

    @ApiProperty()
    purchaseOrderReference?: string;

    @ApiProperty()
    purchaseOrderDescription?: string;

    @ApiProperty()
    salesOrderReference?: string;

    @ApiProperty()
    salesOrderDescription?: string;

    @ApiProperty()
    proformaInvoiceNumber?: string;

    @ApiProperty()
    totalSalesAmount: number;

    @ApiProperty()
    totalDiscountAmount: number;

    @ApiProperty()
    netAmount: number;

    @ApiProperty()
    extraDiscountAmount: number;

    @ApiProperty()
    totalItemsDiscountAmount: number;

    @ApiProperty()
    totalAmount: number;
    @ApiProperty()
    issuerId?: number;
    @ApiProperty()
    receiverId?: number;
    @ApiProperty()
    signaturesId?: number;
    @ApiProperty()
    paymentId?: number;
    @ApiProperty()
    deliveryId?: number;
}
