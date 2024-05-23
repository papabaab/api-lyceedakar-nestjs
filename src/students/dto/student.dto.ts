import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Schema as MongooseSchema } from "mongoose"

@Schema({collection: 'student', timestamps: true})
export class StudentDto {

    @Prop({type: MongooseSchema.Types.ObjectId})    
    studentId?:  MongooseSchema.Types.ObjectId | string

    @Prop({type: String,required: true})
    firstname!: string | Date

    @Prop({type: String,required: true})
    lastname!: string | Date

    @Prop({type: String,nullable: true})
    username!: string
    
    @Prop({ type: String, nullable: true})
    email!: string

    @Prop({type: String, required: true})
    courseId!: string
}

export const StudentSchema = SchemaFactory.createForClass(StudentDto)