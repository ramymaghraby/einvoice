import { Repository } from 'typeorm';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { Receiver } from './entities/receiver.entity';
export declare class ReceiverService {
    private receiverRepo;
    constructor(receiverRepo: Repository<Receiver>);
    create(createReceiverDto: CreateReceiverDto): Promise<CreateReceiverDto & Receiver>;
    findAll(): Promise<Receiver[]>;
    findOne(id: number): Promise<Receiver>;
    update(id: number, updateReceiverDto: UpdateReceiverDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
