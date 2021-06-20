import { ApiProperty } from "@nestjs/swagger";

export class CreateTaxTypeDto {
    @ApiProperty()
    id?: number;
    @ApiProperty()
    taxType: string;
}
