import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Tom' })
  name: string;

  @Column({
    default: 21,
  })
  age: number;

  @Column({
    type: 'timestamp',
    default: 'Tue, 01 Nov 2022 10:20:30 GMT',
  })
  createdAt: Date;
}
