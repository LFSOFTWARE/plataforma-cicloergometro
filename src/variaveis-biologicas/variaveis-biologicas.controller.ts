import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VariaveisBiologicasService } from './variaveis-biologicas.service';
import { CreateVariaveisBiologicaDto } from './dto/create-variaveis-biologica.dto';
import { UpdateVariaveisBiologicaDto } from './dto/update-variaveis-biologica.dto';

@Controller('variaveis-biologicas')
export class VariaveisBiologicasController {
  constructor(
    private readonly variaveisBiologicasService: VariaveisBiologicasService,
  ) {}

  @Post()
  create(@Body() createVariaveisBiologicaDto: CreateVariaveisBiologicaDto) {
    return this.variaveisBiologicasService.create(createVariaveisBiologicaDto);
  }

  @Get()
  findAll() {
    return this.variaveisBiologicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variaveisBiologicasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVariaveisBiologicaDto: UpdateVariaveisBiologicaDto,
  ) {
    return this.variaveisBiologicasService.update(
      +id,
      updateVariaveisBiologicaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variaveisBiologicasService.remove(+id);
  }
}
