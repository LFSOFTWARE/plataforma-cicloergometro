import { DataSource } from 'typeorm';
import { Cid } from './entities/cid.entity';

export const cidProviders = [
  {
    provide: 'CID_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cid),
    inject: ['DATA_SOURCE'],
  },
];
