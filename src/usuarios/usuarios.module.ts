import { usuarioProviders } from './usuarios.providers';
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [...usuarioProviders, UsuariosService],
})
export class UsuariosModule {}
