import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxTotalDto } from './create-tax-total.dto';

export class UpdateTaxTotalDto extends PartialType(CreateTaxTotalDto) {}
