import { DataSource } from 'typeorm';
import { Prontuario } from './entities/prontuario.entity';

export const prontuarioProviders = [
  {
    provide: 'PRONTUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Prontuario),
    inject: ['DATA_SOURCE'],
  },
];
