import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
export declare class ValueService {
    create(createValueDto: CreateValueDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateValueDto: UpdateValueDto): string;
    remove(id: number): string;
}
