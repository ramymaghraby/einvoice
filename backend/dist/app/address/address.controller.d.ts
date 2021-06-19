import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<CreateAddressDto & import("./entities/address.entity").Address>;
    findAll(): Promise<import("./entities/address.entity").Address[]>;
    findOne(id: string): Promise<import("./entities/address.entity").Address>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
