import { Repository } from 'typeorm';
import { CreateStudentDto } from './student.dto';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    addOne(student: CreateStudentDto): Promise<Student>;
}
