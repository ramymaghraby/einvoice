import { Repository } from 'typeorm';
import { CreateTeacherDto } from './teacher.dto';
import { Teacher } from './teacher.entity';
export declare class TeacherService {
    private studentRepository;
    constructor(studentRepository: Repository<Teacher>);
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    addOne(teacher: CreateTeacherDto): Promise<Teacher>;
}
