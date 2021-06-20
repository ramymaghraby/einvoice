import { ApiProperty } from "@nestjs/swagger";

export class CreateReceiverDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    regNum: string;

    @ApiProperty()
    name: string
    @ApiProperty()
    addressId?: number;
}
