import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class StudentInput {

    @Field(() => String, { nullable: false })
    firstname: string 

    @Field(() => String, { nullable: false })
    lastname: string 

    @Field(() => String, { nullable: true })
    username: string
    
    @Field(() => String, { nullable: true })
    email: string

}