import { Component, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent {
  @Input() toggleModalVisibilityFunction!: () => void;

  constructor(private crud: CrudService) {}

  toggleModalVisibility(): void {
    this.toggleModalVisibilityFunction();
  }

  createTask(): void {
    this.crud.CreateTask();
  }
}
