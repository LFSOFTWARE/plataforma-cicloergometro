import { PartialType } from '@nestjs/mapped-types';
import { CreateVariaveisBiologicaDto } from './create-variaveis-biologica.dto';

export class UpdateVariaveisBiologicaDto extends PartialType(CreateVariaveisBiologicaDto) {}
