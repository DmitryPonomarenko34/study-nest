import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/status/entity';
import { Repository } from 'typeorm';
import { TaskEntity } from '../entity';
import { ITask, ITaskOption } from '../interface';

@Injectable()
export class TaskServices {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskEntityRepository: Repository<TaskEntity>,

    @InjectRepository(StatusEntity)
    private readonly statusEntityRepository: Repository<StatusEntity>,
  ) {}

  async findAll(): Promise<ITask[]> {
    return await this.taskEntityRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.status', 'status')
      .getMany();
  }

  async create(task: ITask): Promise<ITask> {
    await this.statusEntityRepository.save(task.status);
    return await this.taskEntityRepository.save(task);
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
