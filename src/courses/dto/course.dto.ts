import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Schema as MongooseSchema } from "mongoose"

@Schema({collection: 'course', timestamps: true})
export class CourseDto {

    @Prop({type: MongooseSchema.Types.ObjectId})
    courseId?:  MongooseSchema.Types.ObjectId | string

    @Prop({type: String, required: true})
    startDate!: string | Date

    @Prop({type: String, required: true})
    endDate!: string | Date

    @Prop({type: String, required: true})
    courseTitle!: string
    
    @Prop({ type: String, nullable: true})
    professor!: string

    @Prop({type: String, nullable: true})
    description!: string
}

export const CourseSchema = SchemaFactory.createForClass(CourseDto)