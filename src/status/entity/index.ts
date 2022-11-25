import { TaskEntity } from 'src/task/entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IStatus } from '../interface';

@Entity('status')
export class StatusEntity implements IStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: 'ready' | 'inProgress';

  @Column()
  color: 'green' | 'orange';

  @OneToOne(() => TaskEntity, (task) => task.status)
  task: TaskEntity;
}
