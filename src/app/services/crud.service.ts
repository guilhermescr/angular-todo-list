import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Task } from '../components/todo-tasks/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    []
  );
  public tasks: Observable<Task[]> = this.tasksSubject.asObservable();

  private dbPath = '/tasks';
  tasksRef: AngularFireList<Task>;

  constructor(
    private fbDb: AngularFireDatabase,
    private modalService: ModalService
  ) {
    this.tasksRef = fbDb.list(this.dbPath);
  }

  FetchTasks(): void {
    this.tasksRef.valueChanges().subscribe((tasks: Task[]) => {
      this.tasksSubject.next(tasks);
    });
  }

  GetTasks(): Task[] {
    return this.tasksSubject.value;
  }

  CreateTask(titleValue: string): void {
    this.tasksRef.set(titleValue, {
      title: titleValue,
      isDone: false,
    });

    alert(`You created a task called "${titleValue}"!`);
  }

  EditTask({ title, isDone }: Task): void {
    const prevTaskTitle = this.modalService.GetPreviousTaskTitle();

    this.tasksRef.remove(prevTaskTitle);

    this.tasksRef.set(title, {
      title,
      isDone,
    });
  }

  ToggleIsDoneProp({ title, isDone }: Task) {
    this.tasksRef.update(title, {
      title,
      isDone: !isDone,
    });
  }

  DeleteTask(titleValue: string): void {
    this.tasksRef.remove(titleValue).then(() => {
      alert(`Task: "${titleValue}" was deleted successfully!`);
    });
  }
}
