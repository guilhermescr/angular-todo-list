import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() tasksList: Task[] = [];

  constructor(private crudService: CrudService) {}

  editTask(titleValue: string): void {
    this.crudService.ToggleModalVisibility();
    this.crudService.ToggleModalMode('edit');
    this.crudService.EditTask(titleValue);
  }

  deleteTask(titleValue: string): void {
    this.crudService.DeleteTask(titleValue);
  }
}
