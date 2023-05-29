import { Component } from '@angular/core';
import tasksData from '../../tasks.json';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss'],
})
export class TodoTasksComponent {
  tasks = tasksData;
}
