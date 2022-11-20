import { Prontuario } from 'src/prontuario/entities/prontuario.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateVariaveisBiologicaDto } from './dto/create-variaveis-biologica.dto';
import { VariaveisBiologica } from './entities/variaveis-biologica.entity';

@Injectable()
export class VariaveisBiologicasService {
  constructor(
    @Inject('VARIAVEIS_REPOSITORY')
    private variaveisBiologicaRepository: Repository<VariaveisBiologica>,
  ) {}
  async create(createVariaveisBiologicaDto: CreateVariaveisBiologicaDto) {
    return this.variaveisBiologicaRepository.save(createVariaveisBiologicaDto);
  }

  findAllById(prontuario: Prontuario) {
    return this.variaveisBiologicaRepository.find({
      where: {
        prontuario: prontuario,
      },
    });
  }
}
