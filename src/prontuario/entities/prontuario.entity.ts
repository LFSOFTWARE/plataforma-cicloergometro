import { VariaveisBiologica } from 'src/variaveis-biologicas/entities/variaveis-biologica.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Prontuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @ManyToOne(() => VariaveisBiologica, (variavel) => variavel.prontuario)
  codVariaveisBiologicasFK: VariaveisBiologica[];

  @Column()
  codAtividadeFK: number;
}
