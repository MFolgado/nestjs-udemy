import { DataSource } from 'typeorm';
import { CourseRefactory1664925255819 } from './old/1664925255819-CourseRefactory';
import { CreateCoursesTable1664483780933 } from './migrations/1664483780933-CreateCoursesTable';
import { CreateTagsTable1665004460261 } from './migrations/1665004460261-CreateTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [ __dirname + '/../dist/migrations/*.js']
});