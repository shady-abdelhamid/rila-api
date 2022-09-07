import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig['type'],
  url: 'mongodb+srv://rila-user:Passw0rd@rilacluster.bz9z1sz.mongodb.net/?retryWrites=true&w=majority',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig['synchronize'],
};
