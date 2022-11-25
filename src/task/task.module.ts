// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { TaskController } from './controller';

// Services
import { TaskServices } from './service';

// Entity
import { TaskEntity } from './entity';
import { StatusEntity } from 'src/status/entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, StatusEntity])],
  controllers: [TaskController],
  providers: [TaskServices],
})
export class TaskModule {}
