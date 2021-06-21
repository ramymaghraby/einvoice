import { ApiProperty } from "@nestjs/swagger";
import { CreateLineItemDto } from "src/app/line-items/dto/create-line-item.dto";
import { CreateTaxSubTypeDto } from "src/app/tax-sub-type/dto/create-tax-sub-type.dto";
import { CreateTaxTypeDto } from "src/app/tax-type/dto/create-tax-type.dto";

export class CreateTaxableItemDto {
    @ApiProperty()
    id?: number;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    rate: number;
    @ApiProperty()
    lineItem?: CreateLineItemDto;

    @ApiProperty()
    taxType?: CreateTaxTypeDto;

    @ApiProperty()
    subType?: CreateTaxSubTypeDto;
}
