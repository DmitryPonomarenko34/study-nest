import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ITask } from '../interface';

@Entity('task')
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'varchar' })
  status: { ready: boolean; progress: boolean };
}
