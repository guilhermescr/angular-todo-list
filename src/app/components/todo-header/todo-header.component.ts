import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent {
  constructor(private crudService: CrudService) {}

  toggleModal(): void {
    this.crudService.ToggleModalVisibility();
  }
}
