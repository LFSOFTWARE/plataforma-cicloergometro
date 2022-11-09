import { Prontuario } from 'src/prontuario/entities/prontuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class VariaveisBiologica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frequenciaCardiaca: number;

  @Column()
  pressao: string;

  @Column()
  temperaturaCorporal: number;

  @Column()
  oxigenacao: number;

  @OneToMany(
    () => Prontuario,
    (prontuario) => prontuario.codVariaveisBiologicasFK,
  )
  prontuario: Prontuario;
}
