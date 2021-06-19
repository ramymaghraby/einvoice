import { ValueService } from './value.service';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
export declare class ValueController {
    private readonly valueService;
    constructor(valueService: ValueService);
    create(createValueDto: CreateValueDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateValueDto: UpdateValueDto): string;
    remove(id: string): string;
}
