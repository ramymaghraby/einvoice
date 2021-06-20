import { ApiProperty } from "@nestjs/swagger";

export class CreateSignatureDto {
    @ApiProperty()
    id?: number;
    @ApiProperty()
    type: string;
    @ApiProperty()
    value: string;
}
