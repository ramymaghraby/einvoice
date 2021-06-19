import { CreateLineItemDto } from './dto/create-line-item.dto';
import { UpdateLineItemDto } from './dto/update-line-item.dto';
export declare class LineItemsService {
    create(createLineItemDto: CreateLineItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLineItemDto: UpdateLineItemDto): string;
    remove(id: number): string;
}
