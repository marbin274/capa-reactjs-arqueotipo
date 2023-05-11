import React, { useEffect, useState } from "react";
import { TodoForm, TodoFormAdvance, TodoList } from "@inteligo/molecules";
import { tabTypes } from "./types";
import { Button } from "@inteligo/atoms";
import "./todo.css";
import { storeService } from "@inteligo/services";
import { ITask } from "@inteligo/models/task";

interface IProps {
  showFormAdvance?: boolean;
}

export const Todo: React.FC<IProps> = ({ showFormAdvance }) => {
  const [tab, setTab] = useState<tabTypes>("form");
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const handleClickForm = () => setTab("form");

  const handleClickList = () => setTab("list");

  const onSaveTask = (task: ITask) => {
    storeService.addTaks(task);
  };

  const getForm = (): React.JSX.Element => {
    return showFormAdvance ? (
      <TodoFormAdvance onSaveTask={onSaveTask} />
    ) : (
      <TodoForm onSaveTask={onSaveTask} />
    );
  };

  useEffect(() => {
    const suscription = storeService.tasks$.subscribe(setTasks);
    return () => {
      suscription.unsubscribe();
    };
  }, []);

  const tabActive = tab === "form" ? getForm() : <TodoList tasks={tasks} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Button link onClick={handleClickForm}>
            Formulario
          </Button>
        </div>
        <div className="col text-center">
          <Button link onClick={handleClickList}>
            {" "}
            Lista de tareas
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 container tab-container">{tabActive}</div>
      </div>
    </div>
  );
};
