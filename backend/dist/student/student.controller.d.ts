import { CreateStudentDto } from './student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
export declare class StudentsController {
    private studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<Student[]>;
    postStudent(createStudentDto: CreateStudentDto): Promise<Student>;
}
