import { Teacher } from 'src/teacher/teacher.entity';
export declare class Student {
    id: number;
    name: string;
    teachers: Promise<Teacher[]>;
}
