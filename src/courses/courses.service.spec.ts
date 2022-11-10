import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';


describe('CoursesService', () => {

  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '18810ca1-67b4-46b7-b582-206200b85c7a';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    const expectOutPutTags = [
      {
        id: id,
        name: 'nestjs',
        created_at: date
      },
    ];

    const expectOutPutCourse = [
      {
        id: id,
        name: 'Teste',
        description: 'Teste description',
        created_at: date,
        tags: expectOutPutTags
      }
    ];

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse))
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutTags)),
      findOne: jest.fn(),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'Teste',
      description: 'Teste description',
      tags: ['nestjs'],
    }

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();

    expect(expectOutPutCourse).toStrictEqual(newCourse);
  });
});
