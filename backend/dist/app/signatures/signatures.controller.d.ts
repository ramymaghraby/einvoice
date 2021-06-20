import { SignaturesService } from './signatures.service';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
export declare class SignaturesController {
    private readonly signaturesService;
    constructor(signaturesService: SignaturesService);
    create(createSignatureDto: CreateSignatureDto): Promise<CreateSignatureDto & import("./entities/signature.entity").Signature>;
    findAll(): Promise<import("./entities/signature.entity").Signature[]>;
    findOne(id: string): Promise<import("./entities/signature.entity").Signature>;
    update(id: string, updateSignatureDto: UpdateSignatureDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
