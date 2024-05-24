import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema({collection: 'course', timestamps: true, toJSON: {virtuals: true}})
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
}

 const CourseSchema = SchemaFactory.createForClass(CourseDto)
 CourseSchema.virtual('courseId').get(function(){return this._id.toHexString()})
export {CourseSchema}