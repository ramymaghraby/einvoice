import { PartialType } from '@nestjs/swagger';
import { CreateTaxableItemDto } from './create-taxable-item.dto';

export class UpdateTaxableItemDto extends PartialType(CreateTaxableItemDto) {}
