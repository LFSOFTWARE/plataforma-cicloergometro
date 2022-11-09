import { DataSource } from 'typeorm';
import { VariaveisBiologica } from './entities/variaveis-biologica.entity';

export const variaveisProviders = [
  {
    provide: 'VARIAVEIS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VariaveisBiologica),
    inject: ['DATA_SOURCE'],
  },
];
