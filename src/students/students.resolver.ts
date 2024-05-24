import { BaseResolver } from "src/commons/baseResolver.resolver";
import { StudentsService } from "./students.service";
import { Resolver } from "@nestjs/graphql";
import { StudentEntity } from "./graphql/student.entity";
import { StudentInput } from "./graphql/student.input";



@Resolver(() => StudentEntity)
export class StudentsResolver extends BaseResolver(StudentEntity, StudentInput) {
    constructor(studentService: StudentsService) {
        super(studentService)
    }
    
 }