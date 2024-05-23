import { Injectable } from '@nestjs/common';
import { MongooseService } from 'src/commons/mongoose.service';
import { CourseDto } from './dto/course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService extends MongooseService<CourseDto> {
    constructor(@InjectModel(CourseDto.name) private courseModel: Model<CourseDto>) {
        super(courseModel);
        console.log("COURSE SERVICE: courseModel: ", this.courseModel.name)
    }
}
