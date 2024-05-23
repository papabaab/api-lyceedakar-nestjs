import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { MongooseService } from 'src/commons/mongoose.service';
import { StudentDto } from './dto/student.dto';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService extends MongooseService<StudentDto> {

    constructor(@InjectModel(StudentDto.name) private studentModel: Model<StudentDto>) {
        super(studentModel)
        console.log("STUDENT SERVICE: studentModel: ", this.studentModel.name)
    }

    findStudentsOfCourse(courseId: string){
        return this.studentModel.find({courseId})
    }
}
