import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { Prontuario } from './entities/prontuario.entity';

@Injectable()
export class ProntuarioService {
  constructor(
    @Inject('PRONTUARIO_REPOSITORY')
    private prontuarioRepository: Repository<Prontuario>,
  ) {}
  async create(createProntuarioDto: CreateProntuarioDto) {
    return this.prontuarioRepository.save(createProntuarioDto);
  }

  findAll() {
    return this.prontuarioRepository.find();
  }

  findOne(id: number) {
    return this.prontuarioRepository.find({
      where: { id: id },
    });
  }
}
