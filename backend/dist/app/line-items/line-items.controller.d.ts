import { LineItemsService } from './line-items.service';
import { CreateLineItemDto } from './dto/create-line-item.dto';
import { UpdateLineItemDto } from './dto/update-line-item.dto';
export declare class LineItemsController {
    private readonly lineItemsService;
    constructor(lineItemsService: LineItemsService);
    create(createLineItemDto: CreateLineItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLineItemDto: UpdateLineItemDto): string;
    remove(id: string): string;
}
