import * as yup from "yup";
import { ITaskInputs } from "./types";

export const TaskSchema: yup.ObjectSchema<ITaskInputs> = yup
  .object({
    task: yup.string().defined().required("Ingresa una tarea"),
  })
  .defined();
