import { ApiProperty } from "@nestjs/swagger";

export class CreateTaxTotalDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    taxTypeId?: number;
    @ApiProperty()
    invoiceId?: number;
}
