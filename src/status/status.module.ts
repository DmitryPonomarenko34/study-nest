import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/task/entity';
import { StatusEntity } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatusEntity, TaskEntity])],
})
export class StatusModule {}
