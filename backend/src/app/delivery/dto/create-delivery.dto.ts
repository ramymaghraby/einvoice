import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    approach?: string;

    @ApiProperty()
    packaging?: string;

    @ApiProperty()
    dateValidity?: string;

    @ApiProperty()
    exportPort?: string;

    @ApiProperty()
    countryOfOrigin?: string;

    @ApiProperty()
    grossWeight?: number;

    @ApiProperty()
    netWeight?: number;

    @ApiProperty()
    terms?: string;
}
