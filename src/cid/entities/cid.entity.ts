import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  descricao: string;
}
