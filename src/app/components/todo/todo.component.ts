import { Component } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todo: Task[] = [
    {
      title: 'Have fun'
    },
    {
      title: 'Study Angular'
    },
    {
      title: 'Play games'
    },
  ];
}
