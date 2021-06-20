import { ApiProperty } from "@nestjs/swagger";

export class CreateDiscountDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    rate:number;

    @ApiProperty()
    amount: number;
}
