import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost/rila',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
