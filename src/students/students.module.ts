import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentDto, StudentSchema } from './dto/student.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsResolver } from './students.resolver';

@Module({

  imports:[
    MongooseModule.forFeature([
      {
        name: StudentDto.name,
        schema: StudentSchema
      }
    ]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsResolver,
  ],

  exports: [StudentsService]
})
export class StudentsModule {}
