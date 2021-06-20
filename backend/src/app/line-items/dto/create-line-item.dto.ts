import { ApiProperty } from "@nestjs/swagger";

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
    invoiceId?: number;
    @ApiProperty()
    discountId?: number;
    @ApiProperty()
    unitValueId?: number;

}
