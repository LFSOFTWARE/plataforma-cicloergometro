import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
