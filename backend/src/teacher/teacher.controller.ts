import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
  @Get()
  getStudents() {
    return this.teacherService.findAll();
  }
  @Post()
  postStudent(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.addOne(createTeacherDto);
  }
}
