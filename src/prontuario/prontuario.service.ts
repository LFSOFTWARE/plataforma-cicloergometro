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
  create(createProntuarioDto: CreateProntuarioDto) {
    return 'This action adds a new prontuario';
  }

  findAll() {
    return `This action returns all prontuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prontuario`;
  }
}
