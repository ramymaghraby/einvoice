import { ApiProperty } from "@nestjs/swagger";

export class CreateIssuerDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    regNum: string;

    @ApiProperty()
    name: string
    @ApiProperty()
    addressId?:number;
}
