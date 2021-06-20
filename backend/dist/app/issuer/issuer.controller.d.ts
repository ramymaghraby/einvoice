import { IssuerService } from './issuer.service';
import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
export declare class IssuerController {
    private readonly issuerService;
    constructor(issuerService: IssuerService);
    create(createIssuerDto: CreateIssuerDto): Promise<CreateIssuerDto & import("./entities/issuer.entity").Issuer>;
    findAll(): Promise<import("./entities/issuer.entity").Issuer[]>;
    findOne(id: string): Promise<import("./entities/issuer.entity").Issuer>;
    update(id: string, updateIssuerDto: UpdateIssuerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
