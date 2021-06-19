import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './teacher.dto';
import { Teacher } from './teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private studentRepository: Repository<Teacher>,
  ) {}
  findAll(): Promise<Teacher[]> {
    return this.studentRepository.find();
  }
  findOne(id: number): Promise<Teacher> {
    return this.studentRepository.findOne(id);
  }
  async addOne(teacher: CreateTeacherDto): Promise<Teacher> {
    console.log(teacher);
    const stud = await this.studentRepository.save(teacher);
    return stud;
  }
}
