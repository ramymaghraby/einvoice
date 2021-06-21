import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
import { Signature } from './entities/signature.entity';

@Injectable()
export class SignaturesService {
  constructor(
    @InjectRepository(Signature) 
    private signatureRepo: Repository<Signature>
    ){}
  create(createSignatureDto: CreateSignatureDto) {
    return this.signatureRepo.save(createSignatureDto);
  }

  findAll() {
    return this.signatureRepo.find();
  }

  findOne(id: number) {
    return this.signatureRepo.findOne(id);
  }

  update(id: number, updateSignatureDto: UpdateSignatureDto) {
    return this.signatureRepo.update(id, updateSignatureDto);
  }

  remove(id: number) {
    return this.signatureRepo.delete(id);
  }
}
