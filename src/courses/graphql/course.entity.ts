import { Field, ObjectType } from "@nestjs/graphql";
import { StudentEntity } from "src/students/graphql/student.entity";

@ObjectType()
export class CourseEntity {

    // @Field(() => String, { nullable: true })
    // id?: string
    
    @Field(() => String, { nullable: true })
    courseId?: string

    @Field(() => String, { nullable: false })
    startDate?: string | Date

    @Field(() => String, { nullable: false })
    endDate?: string | Date

    @Field(() => String, { nullable: true })
    courseTitle: string
    
    @Field(() => String, { nullable: true })
    professor?: string

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [StudentEntity], { nullable: true })
    students?: StudentEntity[]
}