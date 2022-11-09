import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { UpdateProntuarioDto } from './dto/update-prontuario.dto';

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProntuarioDto: UpdateProntuarioDto,
  ) {
    return this.prontuarioService.update(+id, updateProntuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prontuarioService.remove(+id);
  }
}
