import { Component } from '@angular/core';
import { Task } from './task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss'],
})
export class TodoTasksComponent {
  tasks: Task[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.tasks.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
    this.crudService.FetchTasks();
  }
}
