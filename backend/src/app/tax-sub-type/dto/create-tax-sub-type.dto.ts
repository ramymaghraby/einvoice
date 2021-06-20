import { ApiProperty } from "@nestjs/swagger";

export class CreateTaxSubTypeDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    taxSubType: string;
}
