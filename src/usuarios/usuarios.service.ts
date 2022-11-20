import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll() {
    try {
      return await this.usuarioRepository.find();
    } catch (error) {
      console.log(error);
      return { error };
    }
  }

  async findOne(id: number) {
    try {
      return this.usuarioRepository.find({
        where: { id: id },
      });
    } catch (error) {
      return [];
    }
  }
}
