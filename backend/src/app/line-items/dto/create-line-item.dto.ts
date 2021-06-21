import { ApiProperty } from "@nestjs/swagger";
import { CreateDiscountDto } from "src/app/discount/dto/create-discount.dto";
import { CreateInvoiceDto } from "src/app/invoice/dto/create-invoice.dto";
import { CreateValueDto } from "src/app/value/dto/create-value.dto";

export class CreateLineItemDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    itemType: string;

    @ApiProperty()
    itemCode: string;

    @ApiProperty()
    unitType: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    salesTotal: number;

    @ApiProperty()
    total: number;

    @ApiProperty()
    valueDifference: number;

    @ApiProperty()
    totalTaxableFees: number;

    @ApiProperty()
    netTotal: number;

    @ApiProperty()
    itemsDiscount: number;

    @ApiProperty()
    internalCode: string;
    @ApiProperty()
    invoice?: CreateInvoiceDto;
    @ApiProperty()
    discount?: CreateDiscountDto;
    @ApiProperty()
    unitValue?: CreateValueDto;

}
