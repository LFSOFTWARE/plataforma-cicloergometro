import { Prontuario } from 'src/prontuario/entities/prontuario.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { VariaveisBiologicasService } from './variaveis-biologicas.service';
import { CreateVariaveisBiologicaDto } from './dto/create-variaveis-biologica.dto';
import { Response } from 'express';

@Controller('variaveis-biologicas')
export class VariaveisBiologicasController {
  constructor(
    private readonly variaveisBiologicasService: VariaveisBiologicasService,
  ) {}

  @Post()
  async create(
    @Body() createVariaveisBiologicaDto: CreateVariaveisBiologicaDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const variavel = await this.variaveisBiologicasService.create(
        createVariaveisBiologicaDto,
      );
      if (variavel?.id) {
        res.send(HttpStatus.CREATED);
      }
      res.send(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response): Promise<any> {
    try {
      const prontPesquisa: Prontuario = new Prontuario();
      prontPesquisa.id = id;
      const variaveis = await this.variaveisBiologicasService.findAllById(
        prontPesquisa,
      );
      res.json(variaveis);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
