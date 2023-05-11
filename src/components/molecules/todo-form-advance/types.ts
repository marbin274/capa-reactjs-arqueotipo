import { ITask } from "@inteligo/models/task";

export interface IProps {
  onSaveTask(task: ITask): void;
}

export interface ITaskInputs {
  task: string;
}
