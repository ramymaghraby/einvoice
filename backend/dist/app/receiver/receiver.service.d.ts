import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
export declare class ReceiverService {
    create(createReceiverDto: CreateReceiverDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReceiverDto: UpdateReceiverDto): string;
    remove(id: number): string;
}
