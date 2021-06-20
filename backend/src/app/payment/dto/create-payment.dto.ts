import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    bankName?: string;

    @ApiProperty()
    bankAddress?: string;

    @ApiProperty()
    bankAccountNo?: string;

    @ApiProperty()
    bankAccountIBAN?: string;

    @ApiProperty()
    swiftCode?: string;

    @ApiProperty()
    terms?: string;
}
