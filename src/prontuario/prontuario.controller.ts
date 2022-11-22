import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { Response } from 'express';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  async create(
    @Body() createProntuarioDto: CreateProntuarioDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const prontuarioCreated = await this.prontuarioService.create(
        createProntuarioDto,
      );
      res.json(prontuarioCreated);
    } catch (error) {
      res.send(HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
