import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VariaveisBiologicasModule } from './variaveis-biologicas/variaveis-biologicas.module';
import { CidModule } from './cid/cid.module';
import { ProcedimentosModule } from './procedimentos/procedimentos.module';
import { AtividadeModule } from './atividade/atividade.module';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsuariosModule,
    VariaveisBiologicasModule,
    CidModule,
    ProcedimentosModule,
    AtividadeModule,
    ProntuarioModule,
    ColaboradorModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
