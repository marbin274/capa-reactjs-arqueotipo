import * as yup from "yup";
import { ITaskInputs } from "./types";

export const TaskSchema = yup
  .object<ITaskInputs>({
    task: yup.string().defined().required("Ingresa una tarea"),
  })
  .defined();
