import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({collection: 'student', timestamps: true, toJSON: {virtuals: true}})
export class StudentDto {

    studentId?:  string

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

const StudentSchema = SchemaFactory.createForClass(StudentDto)
StudentSchema.virtual('studentId').get(function(){return this._id.toHexString()})
export {StudentSchema}
