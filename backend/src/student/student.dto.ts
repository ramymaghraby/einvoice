import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "src/teacher/teacher.entity";

export class CreateStudentDto {
  @ApiProperty({
    type: String,
    description: 'Student Name',
    default:''
  })
  name: string;
}
