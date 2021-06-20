import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
export declare class DeliveryController {
    private readonly deliveryService;
    constructor(deliveryService: DeliveryService);
    create(createDeliveryDto: CreateDeliveryDto): Promise<CreateDeliveryDto & import("./entities/delivery.entity").Delivery>;
    findAll(): Promise<import("./entities/delivery.entity").Delivery[]>;
    findOne(id: string): Promise<import("./entities/delivery.entity").Delivery>;
    update(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
