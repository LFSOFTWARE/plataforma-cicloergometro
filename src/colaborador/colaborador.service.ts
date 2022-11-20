import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradorService {
  constructor(
    @Inject('COLABORADOR_REPOSITORY')
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async create(createColaboradorDto: CreateColaboradorDto) {
    return this.colaboradorRepository.save(createColaboradorDto);
  }

  findAll() {
    return `This action returns all colaborador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaborador`;
  }

  update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    return `This action updates a #${id} colaborador`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaborador`;
  }
}
