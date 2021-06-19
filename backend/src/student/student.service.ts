import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne(id);
  }
  async addOne(student: CreateStudentDto): Promise<Student> {
    console.log(student);
    const stud = await this.studentRepository.save(student);
    return stud;
  }
}
