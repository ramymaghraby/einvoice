import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiversAppDto } from './create-receivers-app.dto';

export class UpdateReceiversAppDto extends PartialType(CreateReceiversAppDto) {}
