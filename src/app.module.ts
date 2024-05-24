import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { RouterModule, Routes } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

const routes: Routes = [
  {
    path: 'courses',
    module: CoursesModule,
    children: [
      {
        path: ':courseId/students',
        module: StudentsModule,
      },
    ],
  },
];
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://papaalbaab:7D8GHVRBOIaiyOGb@lyceedakarxl.mpyuj9z.mongodb.net/?retryWrites=true&w=majority&appName=lyceedakarxl",),
    RouterModule.register(routes), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'src/schema.gql',
    }),
    CoursesModule, 
    StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
