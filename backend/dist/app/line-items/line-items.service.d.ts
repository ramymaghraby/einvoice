import { Repository } from 'typeorm';
import { CreateLineItemDto } from './dto/create-line-item.dto';
import { UpdateLineItemDto } from './dto/update-line-item.dto';
import { LineItem } from './entities/line-item.entity';
export declare class LineItemsService {
    private lineItemRepo;
    constructor(lineItemRepo: Repository<LineItem>);
    create(createLineItemDto: CreateLineItemDto): Promise<CreateLineItemDto & LineItem>;
    findAll(): Promise<LineItem[]>;
    count(): Promise<[LineItem[], number]>;
    findOne(id: number): Promise<LineItem>;
    update(id: number, updateLineItemDto: UpdateLineItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
