import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
export declare class IssuerService {
    create(createIssuerDto: CreateIssuerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateIssuerDto: UpdateIssuerDto): string;
    remove(id: number): string;
}
