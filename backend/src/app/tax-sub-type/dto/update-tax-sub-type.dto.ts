import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxSubTypeDto } from './create-tax-sub-type.dto';

export class UpdateTaxSubTypeDto extends PartialType(CreateTaxSubTypeDto) {}
