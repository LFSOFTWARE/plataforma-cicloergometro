import { Prontuario } from 'src/prontuario/entities/prontuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class VariaveisBiologica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frequenciaCardiaca: number;

  @Column()
  pressao: number;

  @Column()
  temperaturaCorporal: number;

  @Column()
  oxigenacao: number;

  @ManyToOne(
    () => Prontuario,
    (prontuario) => prontuario.codVariaveisBiologicasFK,
  )
  prontuario: Prontuario;
}
