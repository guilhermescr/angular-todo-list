import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent {
  isModalVisible!: boolean;
  isCreateMode!: boolean;
  titleValue: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.isModalVisible.subscribe((isVisible) => {
      this.isModalVisible = isVisible;
    });

    this.crudService.isCreateMode.subscribe((isCreate) => {
      this.isCreateMode = isCreate;
    });
  }

  closeModal(): void {
    this.crudService.ToggleModalVisibility();
    this.crudService.ToggleModalMode('create');
  }

  createTask(): void {
    if (!this.titleValue.length) return;

    this.crudService.CreateTask(this.titleValue);
    this.titleValue = '';
  }

  editTask(): void {
    if (!this.titleValue.length) return;

    this.crudService.EditTask(this.titleValue);
  }
}
