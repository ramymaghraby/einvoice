import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentsController } from "./student.controller";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [StudentsController],
    providers: [StudentService]
})

export class StudentModule {}