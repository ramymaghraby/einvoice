import { ApiProperty } from "@nestjs/swagger";
import { CreateDeliveryDto } from "src/app/delivery/dto/create-delivery.dto";
import { CreateIssuerDto } from "src/app/issuer/dto/create-issuer.dto";
import { CreatePaymentDto } from "src/app/payment/dto/create-payment.dto";
import { CreateReceiverDto } from "src/app/receiver/dto/create-receiver.dto";
import { CreateSignatureDto } from "src/app/signatures/dto/create-signature.dto";

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
    issuer?: CreateIssuerDto;
    @ApiProperty()
    receiver?: CreateReceiverDto;
    @ApiProperty()
    signatures?: CreateSignatureDto;
    @ApiProperty()
    payment?: CreatePaymentDto;
    @ApiProperty()
    delivery?: CreateDeliveryDto;
}
