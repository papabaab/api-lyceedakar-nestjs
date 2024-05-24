import { BaseResolver } from "src/commons/baseResolver.resolver";
import { CoursesService } from "./courses.service";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { CourseEntity } from "./graphql/course.entity";
import { StudentEntity } from "src/students/graphql/student.entity";
import { StudentsService } from "src/students/students.service";
import { StudentDto } from "src/students/dto/student.dto";



@Resolver(() => CourseEntity)
export class CoursesResolver extends BaseResolver(CourseEntity) {
    constructor(courseService: CoursesService, private studentService: StudentsService) {
        super(courseService)
    }

    @ResolveField('students',() => [StudentEntity], { name: `students` })
    async findAllStudents(@Parent() course: CourseEntity): Promise<StudentDto[]> {
        console.log("COURSES RESOLVER: findAllStudents: ", course)
        const result = await this.studentService.findStudentsOfCourse(course.courseId)
        console.log("COURSES RESOLVER: allStudents of Course: ", result)
        return result
    }
 }