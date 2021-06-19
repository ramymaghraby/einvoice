import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {
    @ApiProperty()
    id?:number;
    @ApiProperty()
    branchId?: string;
    @ApiProperty()
    country: string;
    @ApiProperty()
    governate: string;
    @ApiProperty()
    regionCity: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    buildingNumber: string;
    @ApiProperty()
    postalCode?: string;
    @ApiProperty()
    floor?: string;
    @ApiProperty()
    room?: string;
    @ApiProperty()
    landmark?: string;
    @ApiProperty()
    additionalInformation?: string;
}
