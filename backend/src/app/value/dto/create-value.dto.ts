import { ApiProperty } from "@nestjs/swagger";

export class CreateValueDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    currencySold: string;

    @ApiProperty()
    amountEGP: number;

    @ApiProperty()
    amountSold?: number;

    @ApiProperty()
    currencyExchangeRate: number;
}
