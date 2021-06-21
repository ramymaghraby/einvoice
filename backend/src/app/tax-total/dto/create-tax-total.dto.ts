import { ApiProperty } from "@nestjs/swagger";
import { CreateInvoiceDto } from "src/app/invoice/dto/create-invoice.dto";
import { CreateTaxTypeDto } from "src/app/tax-type/dto/create-tax-type.dto";

export class CreateTaxTotalDto {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    taxType?: CreateTaxTypeDto;
    @ApiProperty()
    invoice?: CreateInvoiceDto;
}
