import { Prontuario } from 'src/prontuario/entities/prontuario.entity';

export class CreateVariaveisBiologicaDto {
  frequenciaCardiaca: number;
  pressao: number;
  temperaturaCorporal: number;
  oxigenacao: number;
  prontuario: Prontuario;
}
