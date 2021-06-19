import { Student } from 'src/student/student.entity';
export declare class Teacher {
    id: number;
    name: string;
    student: Promise<Student>;
}
