import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { CreateStudentDto } from './student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentService) {}
  @Get()
  @ApiOkResponse({
    status: 200, 
    description: 'Array of Students', 
    schema: {
      allOf: [
        {$ref: getSchemaPath(Student)},
        {
          properties: {
            results: {
              type: 'array',
              items: {$ref: getSchemaPath(CreateStudentDto)}
            }
          
        }}
      ]}
  })
  getStudents(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  @Post()
  postStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.addOne(createStudentDto);
  }
}
