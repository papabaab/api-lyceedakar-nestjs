import { BaseResolver } from "src/commons/baseResolver.resolver";
import { StudentsService } from "./students.service";
import { Resolver } from "@nestjs/graphql";
import { StudentEntity } from "./graphql/student.entity";



@Resolver(() => StudentEntity)
export class StudentsResolver extends BaseResolver(StudentEntity) {
    constructor(studentService: StudentsService) {
        super(studentService)
    }
 }