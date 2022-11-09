import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { prontuarioProviders } from './prontuario.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ...prontuarioProviders],
})
export class ProntuarioModule {}
