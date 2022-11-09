import { Injectable } from '@nestjs/common';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';

@Injectable()
export class ProntuarioService {
  create(createProntuarioDto: CreateProntuarioDto) {
    return 'This action adds a new prontuario';
  }

  findAll() {
    return `This action returns all prontuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prontuario`;
  }

  update(id: number, updateProntuarioDto: UpdateProntuarioDto) {
    return `This action updates a #${id} prontuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} prontuario`;
  }
}
