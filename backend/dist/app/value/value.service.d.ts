import { Repository } from 'typeorm';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
import { Value } from './entities/value.entity';
export declare class ValueService {
    private valueRepo;
    constructor(valueRepo: Repository<Value>);
    create(createValueDto: CreateValueDto): Promise<CreateValueDto & Value>;
    findAll(): Promise<Value[]>;
    findOne(id: number): Promise<Value>;
    update(id: number, updateValueDto: UpdateValueDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
