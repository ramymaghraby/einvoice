import { IssuerService } from './issuer.service';
import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
export declare class IssuerController {
    private readonly issuerService;
    constructor(issuerService: IssuerService);
    create(createIssuerDto: CreateIssuerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateIssuerDto: UpdateIssuerDto): string;
    remove(id: string): string;
}
