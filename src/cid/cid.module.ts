import { cidProviders } from './cid.providers';
import { Module } from '@nestjs/common';
import { CidService } from './cid.service';
import { CidController } from './cid.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CidController],
  providers: [CidService, ...cidProviders],
})
export class CidModule {}
