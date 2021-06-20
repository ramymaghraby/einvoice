import { Repository } from 'typeorm';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';
export declare class DeliveryService {
    private deliveryRepo;
    constructor(deliveryRepo: Repository<Delivery>);
    create(createDeliveryDto: CreateDeliveryDto): Promise<CreateDeliveryDto & Delivery>;
    findAll(): Promise<Delivery[]>;
    findOne(id: number): Promise<Delivery>;
    update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
