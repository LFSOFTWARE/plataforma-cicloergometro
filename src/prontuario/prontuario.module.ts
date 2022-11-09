import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';

@Module({
  controllers: [ProntuarioController],
  providers: [ProntuarioService]
})
export class ProntuarioModule {}
