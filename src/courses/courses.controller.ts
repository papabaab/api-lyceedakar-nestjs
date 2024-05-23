import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';

@Controller('')
export class CoursesController {

    constructor(private courserService: CoursesService) {}

    @Get('')
    async getCourses() {
        return await this.courserService.findAll()
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
