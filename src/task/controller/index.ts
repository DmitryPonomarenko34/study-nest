import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ITask, ITaskOption } from '../interface';
import { TaskServices } from '../service';

@Controller('task')
export class TaskController {
  constructor(private taskServices: TaskServices) {}

  @Post()
  create(@Body() task: ITask): Promise<ITask> {
    return this.taskServices.create(task);
  }

  @Put()
  editDescr(@Body() taskOption: ITaskOption): Promise<ITask> {
    return this.taskServices.editDescription(taskOption);
  }

  @Get()
  findAll(): Promise<ITask[]> {
    return this.taskServices.findAll();
  }

  @Delete()
  remove(@Body() option: { id: number }): Promise<boolean> {
    return this.taskServices.remove(option.id);
  }
}
