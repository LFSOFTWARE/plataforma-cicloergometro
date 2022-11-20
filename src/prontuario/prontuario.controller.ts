import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  create(@Body() createProntuarioDto: CreateProntuarioDto) {
    return this.prontuarioService.create(createProntuarioDto);
  }

  @Get()
  findAll() {
    return this.prontuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prontuarioService.findOne(+id);
  }
}
