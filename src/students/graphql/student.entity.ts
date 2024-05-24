import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StudentEntity {

    @Field(() => String,{ nullable: true })
    studentId?: string

    @Field(() => String, { nullable: false })
    firstname!: string 

    @Field(() => String, { nullable: false })
    lastname!: string 

    @Field(() => String, { nullable: true })
    username!: string
    
    @Field(() => String, { nullable: true })
    email!: string

    @Field(() => String, { nullable: true })
    courseId!: string

}