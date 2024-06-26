import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pauta {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  descricao: string;

  @Column({ type: 'timestamp', nullable: true })
  abertura?: Date;

  @Column({ type: 'timestamp', nullable: true })
  fechamento?: Date;

  @CreateDateColumn()
  createdAt: Date;
}
