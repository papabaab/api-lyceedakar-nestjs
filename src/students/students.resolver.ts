import { BaseResolver } from "src/commons/baseResolver.resolver";
import { StudentsService } from "./students.service";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { StudentEntity } from "./graphql/student.entity";
import { StudentInput } from "./graphql/student.input";



@Resolver(() => StudentEntity)
export class StudentsResolver extends BaseResolver(StudentEntity, StudentInput) {
    private st: StudentsService
    constructor(studentsService: StudentsService) {
        super(studentsService)
        this.st = studentsService
    }


    @Query(() => [StudentEntity], { name: `studentsInCourse` })
    async getStudentsInCourse(@Args('courseId') courseId: string): Promise<StudentEntity[]> {
        return await this.st.findStudentsOfCourse(courseId) as StudentEntity[]
    }
 }