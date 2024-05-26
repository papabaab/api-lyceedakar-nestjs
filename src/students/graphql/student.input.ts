import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class StudentInput {

    @Field(() => String,{ nullable: true })
    studentId?: string

    @Field(() => String, { nullable: true })
    firstname: string 

    @Field(() => String, { nullable: true })
    lastname: string 

    @Field(() => String, { nullable: true })
    username: string
    
    @Field(() => String, { nullable: true })
    email: string

    @Field(() => String, { nullable: true })
    courseId: string

}