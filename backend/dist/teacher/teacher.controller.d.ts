import { CreateTeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    getStudents(): Promise<import("./teacher.entity").Teacher[]>;
    postStudent(createTeacherDto: CreateTeacherDto): Promise<import("./teacher.entity").Teacher>;
}
