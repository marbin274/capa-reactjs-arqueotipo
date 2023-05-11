import { PropsWithChildren, useState } from "react";
import { Button } from "@inteligo/atoms";
import { IProps } from "./types";
import { ITask } from "@inteligo/models/task";

export const TodoForm: React.FC<PropsWithChildren<IProps>> = ({
  onSaveTask,
}) => {
  const [task, setTask] = useState<ITask>({ text: "" });

  const handleChangeTask = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      text: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveTask(task);
    setTask({ text: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-12">
            <label>Tarea</label>
            <input
              className="form__input"
              type="text"
              placeholder="Ingrese una tarea"
              value={task.text}
              onChange={handleChangeTask}
            />
          </div>
          <div className="col-12" style={{ marginTop: "1rem" }}>
            <Button type="submit">Agregar</Button>
          </div>
        </div>
      </form>
    </>
  );
};
