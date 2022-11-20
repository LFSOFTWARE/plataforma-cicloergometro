import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registroProfissional: string;

  @Column()
  codUsuarioFK: number;
}
