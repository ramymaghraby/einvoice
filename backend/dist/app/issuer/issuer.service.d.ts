import { Repository } from 'typeorm';
import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
import { Issuer } from './entities/issuer.entity';
export declare class IssuerService {
    private issuerRepo;
    constructor(issuerRepo: Repository<Issuer>);
    create(createIssuerDto: CreateIssuerDto): Promise<CreateIssuerDto & Issuer>;
    findAll(): Promise<Issuer[]>;
    findOne(id: number): Promise<Issuer>;
    update(id: number, updateIssuerDto: UpdateIssuerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
