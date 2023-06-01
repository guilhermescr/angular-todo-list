import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ModalService } from 'src/app/services/modal.service';
import { Task } from '../todo-tasks/task';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent {
  isModalVisible!: boolean;
  isCreateMode!: boolean;
  titleValue: string = '';

  constructor(
    private crudService: CrudService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.isModalVisible.subscribe((isVisible) => {
      this.isModalVisible = isVisible;
    });

    this.modalService.isCreateMode.subscribe((isCreate) => {
      this.isCreateMode = isCreate;
    });

    this.modalService.previousTaskTitle.subscribe((taskTitle) => {
      this.titleValue = taskTitle;
    });
  }

  closeModal(): void {
    this.modalService.ToggleModalVisibility();
    this.modalService.ToggleModalMode('create');
    this.modalService.SetPreviousTaskTitle('');
  }

  createTask(): void {
    if (!this.titleValue.length) return;

    this.crudService.CreateTask(this.titleValue);
    this.titleValue = '';
    this.closeModal();
  }

  editTask(): void {
    if (!this.titleValue.length) return;

    const tasks = this.crudService.GetTasks();
    const prevTaskTitle = this.modalService.GetPreviousTaskTitle();
    const updatedTaskTitle = this.titleValue;

    const taskToBeEdited = tasks.find((task) => task.title === prevTaskTitle);

    if (taskToBeEdited !== undefined) {
      const { isDone } = taskToBeEdited;
      const newTask: Task = { title: updatedTaskTitle, isDone };

      this.crudService.EditTask(newTask);
      this.closeModal();
    }
  }
}
