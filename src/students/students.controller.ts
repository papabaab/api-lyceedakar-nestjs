import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentsService } from './students.service';

@Controller('')
export class StudentsController {

    constructor(private studentsService: StudentsService) {}

    @Get('')
    async getStudents(@Param('courseId') courseId: string) {
        console.log("STUDENT CONTROLLER: getStudents: ", courseId)
        if(!courseId)
        return await this.studentsService.findAll()
    else
       { 
        const result =  await this.studentsService.findStudentsOfCourse(courseId)
        console.log("STUDENT CONTROLLER: allStudents of Course: ", result)
        return result
        }
    }

    @Get(':studentId')
    async getStudentById(@Param('studentId') id: string) {
        return await this.studentsService.findOne(id)
    }

    @Post('')
    async createStudent(@Body() student: StudentDto, @Param('courseId') courseId: string) {
        if(!student.courseId) student.courseId = courseId
        return await this.studentsService.create(student)
    }

    @Put(':studentId')
    async updateStudent(@Param('studentId') id: string, @Body() student: StudentDto) {
        return await this.studentsService.update(id, student)
    }

    @Delete(':studentId')
    async deleteStudent(@Param('studentId') id: string) {
        return await this.studentsService.delete(id)
    }

}
