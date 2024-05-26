import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';
import { StudentsService } from 'src/students/students.service';

@Controller('')
export class CoursesController {

    constructor(private courserService: CoursesService, private studentService: StudentsService) {}

    @Get('')
    async getCourses() {
        const courses = await this.courserService.findAll()
       await Promise.all(courses.map(async (course) => {
           course.students = await this.studentService.findStudentsOfCourse(course.courseId)
           console.log("COURSE CONTROLLER: course: ", course)
        }))
        return courses
    }

    @Get(':courseId')
    async getCourseById(@Param('courseId') id: string) {
        console.log("COURSE CONTROLLER: getCourseById: ", id)
        const course =  await this.courserService.findOne(id)
        console.log("COURSE CONTROLLER: course details: ", course)
        return course
    }

    @Post('')
    async createCourse(@Body() course: CourseDto) {
        return await this.courserService.create(course)
    }

    @Put(':courseId')
    async updateCourse(@Param('courseId') id: string, @Body() course: CourseDto) {
        return await this.courserService.update(id, course)
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') id: string) {
        return await this.courserService.delete(id)
    }

}
