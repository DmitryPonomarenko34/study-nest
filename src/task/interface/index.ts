// Interfaces
import { IStatus } from 'src/status/interface';

export interface ITask {
  id?: number;
  title: string;
  description: string;
  status: IStatus;
}

export interface ITaskOption {
  id: number;
  description: string;
}
