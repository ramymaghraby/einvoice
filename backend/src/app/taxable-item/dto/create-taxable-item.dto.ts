import { ApiProperty } from "@nestjs/swagger";

export class CreateTaxableItemDto {
    @ApiProperty()
    id?: number;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    rate: number;
    @ApiProperty()
    lineItemId?: number;

    @ApiProperty()
    taxTypeId?: number;

    @ApiProperty()
    subTypeId?: number;
}
