import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateVariaveisBiologicaDto } from './dto/create-variaveis-biologica.dto';
import { UpdateVariaveisBiologicaDto } from './dto/update-variaveis-biologica.dto';
import { VariaveisBiologica } from './entities/variaveis-biologica.entity';

@Injectable()
export class VariaveisBiologicasService {
  constructor(
    @Inject('VARIAVEIS_REPOSITORY')
    private variaveisBiologicaRepository: Repository<VariaveisBiologica>,
  ) {}
  create(createVariaveisBiologicaDto: CreateVariaveisBiologicaDto) {
    return 'This action adds a new variaveisBiologica';
  }

  findAll() {
    return `This action returns all variaveisBiologicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variaveisBiologica`;
  }

  update(id: number, updateVariaveisBiologicaDto: UpdateVariaveisBiologicaDto) {
    return `This action updates a #${id} variaveisBiologica`;
  }

  remove(id: number) {
    return `This action removes a #${id} variaveisBiologica`;
  }
}
