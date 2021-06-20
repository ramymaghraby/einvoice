import { ValueService } from './value.service';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
export declare class ValueController {
    private readonly valueService;
    constructor(valueService: ValueService);
    create(createValueDto: CreateValueDto): Promise<CreateValueDto & import("./entities/value.entity").Value>;
    findAll(): Promise<import("./entities/value.entity").Value[]>;
    findOne(id: string): Promise<import("./entities/value.entity").Value>;
    update(id: string, updateValueDto: UpdateValueDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
