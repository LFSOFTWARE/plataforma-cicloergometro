import { Injectable } from '@nestjs/common';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';

@Injectable()
export class ProcedimentosService {
  create(createProcedimentoDto: CreateProcedimentoDto) {
    return 'This action adds a new procedimento';
  }

  findAll() {
    return `This action returns all procedimentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procedimento`;
  }

  update(id: number, updateProcedimentoDto: UpdateProcedimentoDto) {
    return `This action updates a #${id} procedimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedimento`;
  }
}
