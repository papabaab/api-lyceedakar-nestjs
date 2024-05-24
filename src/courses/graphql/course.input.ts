import { Field, InputType, } from "@nestjs/graphql";

@InputType()
export class CourseInput {
    @Field({ nullable: false })
    startDate?: string | Date

    @Field({ nullable: false })
    endDate: string | Date

    @Field(() => String, { nullable: true })
    courseTitle: string
    
    @Field(() => String, { nullable: true })
    professor?: string

    @Field(() => String, { nullable: true })
    description?: string
}