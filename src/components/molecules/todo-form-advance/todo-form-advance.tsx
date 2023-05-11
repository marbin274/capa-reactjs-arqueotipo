import { yupResolver } from "@hookform/resolvers/yup";
import { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@inteligo/atoms";
import { TaskSchema } from "./task.schema";
import { IProps, ITaskInputs } from "./types";

export const TodoFormAdvance: React.FC<PropsWithChildren<IProps>> = ({
  onSaveTask,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskInputs>({
    resolver: yupResolver(TaskSchema),
  });

  const handleAddTask = (data: ITaskInputs) => {
    onSaveTask({
      text: data.task,
    });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <div className="row justify-content-center">
          <div className="col-12">
            <label>Tarea</label>
            <input
              className="form__input"
              type="text"
              placeholder="Ingrese una tarea"
              {...register("task")}
            />
            {errors.task && (
              <div className="error">
                <span>{errors.task.message}</span>
              </div>
            )}
          </div>
          <div className="col-12" style={{ marginTop: "1rem" }}>
            <Button type="submit">Agregar</Button>
          </div>
        </div>
      </form>
    </>
  );
};
