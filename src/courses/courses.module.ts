import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesController } from './courses.controller';
import { courseProviders } from './courses.providers';
import { tagProviders } from './tags.providers';
import { CoursesService } from './courses.service';
@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [CoursesService, ...courseProviders, ...tagProviders],
})
export class CoursesModule {}
