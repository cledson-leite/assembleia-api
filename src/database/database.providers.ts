import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const databaseProviders: Provider<DataSource>[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'assembleia',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
