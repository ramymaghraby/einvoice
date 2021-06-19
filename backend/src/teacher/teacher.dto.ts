import { ApiProperty } from "@nestjs/swagger";

export class CreateTeacherDto {
  @ApiProperty({
    type: String,
    description: 'Teacher Name',
    default:''
  })
  name: string;
}
