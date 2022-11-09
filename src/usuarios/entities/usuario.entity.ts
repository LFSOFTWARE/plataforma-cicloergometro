import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  // 0 = paciente 1 = recepcionionista 2 = fisioterapeuta
  @Column()
  status: number;
}
