import { Field, InputType, } from "@nestjs/graphql";

@InputType()
export class CourseInput {

    @Field(() => String, { nullable: true })
    startDate: string | Date

    @Field(() => String, { nullable: true })
    endDate: string | Date

    @Field(() => String, { nullable: true })
    courseTitle: string
    
    @Field(() => String, { nullable: true })
    professor?: string

    @Field(() => String, { nullable: true })
    description?: string
}