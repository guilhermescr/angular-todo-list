import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { CrudService } from 'src/app/services/crud.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() tasksList: Task[] = [];

  constructor(
    private crudService: CrudService,
    private modalService: ModalService
  ) {}

  openModalToEditTask(task: Task): void {
    this.modalService.ToggleModalVisibility();
    this.modalService.ToggleModalMode('edit');
    this.modalService.SetPreviousTaskTitle(task.title);
  }

  toggleTaskCheckbox(task: Task): void {
    this.crudService.ToggleIsDoneProp(task);
  }

  deleteTask(titleValue: string): void {
    this.crudService.DeleteTask(titleValue);
  }
}
