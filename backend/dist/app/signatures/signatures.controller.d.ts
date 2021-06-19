import { SignaturesService } from './signatures.service';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
export declare class SignaturesController {
    private readonly signaturesService;
    constructor(signaturesService: SignaturesService);
    create(createSignatureDto: CreateSignatureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSignatureDto: UpdateSignatureDto): string;
    remove(id: string): string;
}
