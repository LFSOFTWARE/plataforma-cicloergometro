import { Module } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { AtividadeController } from './atividade.controller';
import { DatabaseModule } from 'src/database/database.module';
import { atividadeProviders } from './atividade.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AtividadeController],
  providers: [AtividadeService, ...atividadeProviders],
})
export class AtividadeModule {}
