import { ReceiverService } from './receiver.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
export declare class ReceiverController {
    private readonly receiverService;
    constructor(receiverService: ReceiverService);
    create(createReceiverDto: CreateReceiverDto): Promise<CreateReceiverDto & import("./entities/receiver.entity").Receiver>;
    findAll(): Promise<import("./entities/receiver.entity").Receiver[]>;
    findOne(id: string): Promise<import("./entities/receiver.entity").Receiver>;
    update(id: string, updateReceiverDto: UpdateReceiverDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
