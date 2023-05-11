import { ITask } from "@inteligo/models/task";
import { ListItem } from "@inteligo/atoms";

interface IProps {
  tasks: Array<ITask>;
}

function TodoList(props: IProps) {
  return (
    <div className="list-container">
      {props.tasks.map((it, index) => {
        const key = `item-${index}`;
        return <ListItem key={key} task={it} />;
      })}
    </div>
  );
}

export default TodoList;
