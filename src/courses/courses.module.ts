import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseDto, CourseSchema } from './dto/course.dto';
import { CoursesResolver } from './courses.resolver';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: CourseDto.name,
        schema: CourseSchema
      }
    ]),
    StudentsModule,
  ],
  controllers: [CoursesController],
  providers: [
    CoursesResolver,
    CoursesService
  ]
})
export class CoursesModule {}
