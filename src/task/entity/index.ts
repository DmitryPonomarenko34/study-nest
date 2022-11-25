// Core
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Interface
import { ITask } from '../interface';
import { StatusEntity } from 'src/status/entity';

@Entity('task')
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToOne(() => StatusEntity, (status) => status.task)
  @JoinColumn()
  status: StatusEntity;
}
