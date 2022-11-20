import { Module } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { ColaboradorController } from './colaborador.controller';
import { colaboradorProviders } from './colaborador.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ColaboradorController],
  providers: [ColaboradorService, ...colaboradorProviders],
})
export class ColaboradorModule {}
