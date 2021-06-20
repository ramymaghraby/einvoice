import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssuerDto } from './dto/create-issuer.dto';
import { UpdateIssuerDto } from './dto/update-issuer.dto';
import { Issuer } from './entities/issuer.entity';

@Injectable()
export class IssuerService {
  constructor(@InjectRepository(Issuer) private issuerRepo: Repository<Issuer>){}
  create(createIssuerDto: CreateIssuerDto) {
    return this.issuerRepo.save(createIssuerDto);
  }

  findAll() {
    return this.issuerRepo.find();
  }

  findOne(id: number) {
    return this.issuerRepo.findOne(id, {relations:["address"]});
  }

  update(id: number, updateIssuerDto: UpdateIssuerDto) {
    return this.issuerRepo.update(id, updateIssuerDto);
  }

  remove(id: number) {
    return this.issuerRepo.delete(id);
  }
}
