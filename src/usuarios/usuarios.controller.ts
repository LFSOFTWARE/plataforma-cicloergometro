import { MissingParamError } from './../erros/missing-param';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Response } from 'express';
import { ColaboradorService } from 'src/colaborador/colaborador.service';
import { CreateColaboradorDto } from 'src/colaborador/dto/create-colaborador.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly colaboradorService: ColaboradorService,
  ) {}

  @Post()
  async create(
    @Body() createUsuarioDto: CreateUsuarioDto,
    @Res() res: Response,
  ): Promise<any> {
    const requiredFields: string[] = [
      'name',
      'password',
      'email',
      'cpf',
      'status',
      'registroProfissional',
    ];

    for (const field of requiredFields) {
      if (!createUsuarioDto[field]) {
        res.status(HttpStatus.BAD_REQUEST);
        res.json(new MissingParamError(field)).send();
      }
    }

    try {
      const usuario = await this.usuariosService.create(createUsuarioDto);

      if (!usuario) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
      }

      if (usuario.status === 2) {
        const colaboradorDto: CreateColaboradorDto = {
          registroProfissional: usuario?.registroProfissional,
          codUsuarioFK: usuario?.id,
        };
        this.colaboradorService.create(colaboradorDto);
      }
      delete usuario.password;
      res.json(usuario);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<any> {
    try {
      const users = await this.usuariosService.findAll();
      res.json(users).status(HttpStatus.OK).send();
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
    try {
      const user = await this.usuariosService.findOne(+id);
      return res.json(user).status(HttpStatus.OK).send();
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
