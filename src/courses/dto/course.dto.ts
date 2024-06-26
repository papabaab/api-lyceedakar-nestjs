import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { StudentDto } from "src/students/dto/student.dto"
@Schema({collection: 'course', timestamps: true, toJSON: {virtuals: true}, strict: false, versionKey: false})
export class CourseDto {

    courseId?: string

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


    @Prop({type: [StudentDto], nullable: true})
    students?: StudentDto[]
}

 const CourseSchema = SchemaFactory.createForClass(CourseDto)
 CourseSchema.virtual('courseId').get(function(){return this._id.toHexString()})
export {CourseSchema}
