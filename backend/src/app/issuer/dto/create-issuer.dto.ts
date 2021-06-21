import { ApiProperty } from "@nestjs/swagger";
import { CreateAddressDto } from "src/app/address/dto/create-address.dto";

export class CreateIssuerDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    regNum: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address?: CreateAddressDto;
}
