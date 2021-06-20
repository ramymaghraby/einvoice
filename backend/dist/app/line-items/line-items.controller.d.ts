import { LineItemsService } from './line-items.service';
import { CreateLineItemDto } from './dto/create-line-item.dto';
import { UpdateLineItemDto } from './dto/update-line-item.dto';
export declare class LineItemsController {
    private readonly lineItemsService;
    constructor(lineItemsService: LineItemsService);
    create(createLineItemDto: CreateLineItemDto): Promise<CreateLineItemDto & import("./entities/line-item.entity").LineItem>;
    findAll(): Promise<import("./entities/line-item.entity").LineItem[]>;
    count(): Promise<[import("./entities/line-item.entity").LineItem[], number]>;
    findOne(id: string): Promise<import("./entities/line-item.entity").LineItem>;
    update(id: string, updateLineItemDto: UpdateLineItemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
