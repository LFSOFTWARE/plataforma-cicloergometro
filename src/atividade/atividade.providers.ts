import { DataSource } from 'typeorm';
import { Atividade } from './entities/atividade.entity';

export const atividadeProviders = [
  {
    provide: 'ATIVIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Atividade),
    inject: ['DATA_SOURCE'],
  },
];
