import { Repository } from 'typeorm';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
import { Signature } from './entities/signature.entity';
export declare class SignaturesService {
    private signatureRepo;
    constructor(signatureRepo: Repository<Signature>);
    create(createSignatureDto: CreateSignatureDto): Promise<CreateSignatureDto & Signature>;
    findAll(): Promise<Signature[]>;
    findOne(id: number): Promise<Signature>;
    update(id: number, updateSignatureDto: UpdateSignatureDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
