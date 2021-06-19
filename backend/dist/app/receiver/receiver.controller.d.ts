import { ReceiverService } from './receiver.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
export declare class ReceiverController {
    private readonly receiverService;
    constructor(receiverService: ReceiverService);
    create(createReceiverDto: CreateReceiverDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReceiverDto: UpdateReceiverDto): string;
    remove(id: string): string;
}
