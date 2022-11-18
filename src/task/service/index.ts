import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../entity';
import { ITask, ITaskOption } from '../interface';

@Injectable()
export class TaskServices {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskEntityRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<ITask[]> {
    return this.taskEntityRepository.find();
  }

  async create(task: ITask): Promise<ITask> {
    return this.taskEntityRepository.save(task);
  }

  async remove(id: number): Promise<boolean> {
    const findTask = await this.taskEntityRepository.findOneBy({ id });
    const removeTask = await this.taskEntityRepository.remove(findTask);

    if (removeTask) {
      return true;
    } else {
      return false;
    }
  }

  async editDescription(taskOption: ITaskOption): Promise<ITask> {
    const findTask = await this.taskEntityRepository.findOneBy({
      id: taskOption.id,
    });

    const updateTask = {
      ...findTask,
      description: taskOption.description,
    };

    return this.taskEntityRepository.save(updateTask);
  }
}
