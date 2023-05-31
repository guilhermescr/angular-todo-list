import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { ref, set, update } from '@angular/fire/database';
import { Task } from '../components/todo-tasks/task';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private dbPath = '/tasks';
  private tasks: Task[] = [];
  tasksRef: AngularFireList<Task>;

  private isModalVisibleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isModalVisible: Observable<boolean> =
    this.isModalVisibleSubject.asObservable();

  private isCreateModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public isCreateMode: Observable<boolean> =
    this.isCreateModeSubject.asObservable();

  constructor(private fbDb: AngularFireDatabase) {
    this.tasksRef = fbDb.list(this.dbPath);
  }

  GetTasks(): Task[] {
    this.tasksRef.valueChanges().subscribe((tasks) => {
      tasks.forEach((task) => {
        this.tasks.push(task);
      });
    });

    return this.tasks;
  }

  CreateTask(titleValue: string): void {
    this.tasksRef.set(titleValue, {
      title: titleValue,
      isDone: false,
    });

    alert(`You created a task called "${titleValue}"!`);
  }

  EditTask(titleValue: string): void {
    // this.tasksRef.update(titleValue)
  }

  DeleteTask(titleValue: string): void {
    this.tasksRef.remove(titleValue).then(() => {
      alert(`Task: "${titleValue}" was deleted successfully!`);
    });
  }

  ToggleModalVisibility(): void {
    this.isModalVisibleSubject.next(!this.isModalVisibleSubject.value);
  }

  ToggleModalMode(modalMode: string): void {
    this.isCreateModeSubject.next(modalMode === 'create');
  }
}
