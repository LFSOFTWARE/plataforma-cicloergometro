import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Atividade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column()
  data: string;
  @Column()
  hora: string;
  @Column()
  duracao: string;
  @Column()
  codUsuarioFK: number;
  @Column()
  codEspecialista: number;
}
