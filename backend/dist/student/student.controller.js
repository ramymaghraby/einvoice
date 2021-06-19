"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const student_dto_1 = require("./student.dto");
const student_entity_1 = require("./student.entity");
const student_service_1 = require("./student.service");
let StudentsController = class StudentsController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getStudents() {
        return this.studentService.findAll();
    }
    postStudent(createStudentDto) {
        return this.studentService.addOne(createStudentDto);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({
        status: 200,
        description: 'Array of Students',
        schema: {
            allOf: [
                { $ref: swagger_1.getSchemaPath(student_entity_1.Student) },
                {
                    properties: {
                        results: {
                            type: 'array',
                            items: { $ref: swagger_1.getSchemaPath(student_dto_1.CreateStudentDto) }
                        }
                    }
                }
            ]
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getStudents", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "postStudent", null);
StudentsController = __decorate([
    swagger_1.ApiTags('students'),
    common_1.Controller('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentsController);
exports.StudentsController = StudentsController;
//# sourceMappingURL=student.controller.js.map