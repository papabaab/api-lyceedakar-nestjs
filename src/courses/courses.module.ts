import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseDto, CourseSchema } from './dto/course.dto';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: CourseDto.name,
        schema: CourseSchema
      }
    ])
  ],
  controllers: [CoursesController],
  providers: [
    CoursesService]
})
export class CoursesModule {}
