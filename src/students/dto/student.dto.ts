import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({collection: 'student', timestamps: true, toJSON: {virtuals: true}, strict: false, versionKey: false})
export class StudentDto {

    @Prop({type: String})
    studentId?:  string

    @Prop({type: String,required: true})
    firstname!: string | Date

    @Prop({type: String,required: true})
    lastname!: string | Date

    @Prop({type: String,nullable: true})
    username!: string
    
    @Prop({ type: String, nullable: true})
    email!: string

    @Prop({type: String, nullable: false})
    courseId!: string
}

const StudentSchema = SchemaFactory.createForClass(StudentDto)
StudentSchema.post('find', function(docs) {
    docs.forEach(doc => {
        doc.studentId = doc._id.toHexString()
    })
})
export {StudentSchema}
