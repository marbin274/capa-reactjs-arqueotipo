import { ITask } from "@inteligo/models/task";
import { BehaviorSubject, Observable } from "rxjs";

class StoreService {
  private _task$: BehaviorSubject<Array<ITask>>;
  constructor() {
    this._task$ = new BehaviorSubject<Array<ITask>>([]);
    let taskStorage = localStorage.getItem("tasks");
    if (taskStorage) {
      this._task$.next(JSON.parse(taskStorage));
    }
  }

  addTaks(task: ITask) {
    const tasks = this._task$.getValue();
    this.setTasks([...tasks, task]);
  }
  get tasks$(): Observable<Array<ITask>> {
    return this._task$.asObservable();
  }
  setTasks(taks: Array<ITask>) {
    this._task$.next([...taks]);
    localStorage.setItem("tasks", JSON.stringify(taks));
  }
}

export const storeService = new StoreService();
