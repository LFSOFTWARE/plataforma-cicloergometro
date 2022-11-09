import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcedimentosService } from './procedimentos.service';
import { CreateProcedimentoDto } from './dto/create-procedimento.dto';
import { UpdateProcedimentoDto } from './dto/update-procedimento.dto';

@Controller('procedimentos')
export class ProcedimentosController {
  constructor(private readonly procedimentosService: ProcedimentosService) {}

  @Post()
  create(@Body() createProcedimentoDto: CreateProcedimentoDto) {
    return this.procedimentosService.create(createProcedimentoDto);
  }

  @Get()
  findAll() {
    return this.procedimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procedimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcedimentoDto: UpdateProcedimentoDto) {
    return this.procedimentosService.update(+id, updateProcedimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procedimentosService.remove(+id);
  }
}
