import { ITask } from "@inteligo/models/task";
import { BehaviorSubject, Observable } from "rxjs";

class StoreService {
  private readonly _task$: BehaviorSubject<Array<ITask>>;
  constructor() {
    this._task$ = new BehaviorSubject<Array<ITask>>([]);
    const taskStorage = localStorage.getItem("tasks");
    if (taskStorage) {
      this._task$.next(JSON.parse(taskStorage));
    }
  }

  get tasks$(): Observable<Array<ITask>> {
    return this._task$.asObservable();
  }

  addTaks(task: ITask) {
    const tasks = this._task$.getValue();
    this.setTasks([...tasks, task]);
  }

  setTasks(taks: Array<ITask>) {
    this._task$.next([...taks]);
    localStorage.setItem("tasks", JSON.stringify(taks));
  }
}

export const storeService = new StoreService();
