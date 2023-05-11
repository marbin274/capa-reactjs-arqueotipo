import { ITask } from "@inteligo/models/task";
import "./list-item.css";

export const ListItem: React.FC<{ task: ITask }> = ({ task }) => {
  return <div className="list-item">{task.text}</div>;
};
