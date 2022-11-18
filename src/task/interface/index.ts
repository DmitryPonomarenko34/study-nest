export interface ITask {
  id?: number;
  title: string;
  description: string;
  status: {
    ready: boolean;
    progress: boolean;
  };
}

export interface ITaskOption {
  id: number;
  description: string;
}
