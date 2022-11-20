import { usuarioProviders } from './usuarios.providers';
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { colaboradorProviders } from 'src/colaborador/colaborador.providers';
import { ColaboradorService } from 'src/colaborador/colaborador.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [
    ...usuarioProviders,
    UsuariosService,
    ColaboradorService,
    ...colaboradorProviders,
  ],
})
export class UsuariosModule {}
