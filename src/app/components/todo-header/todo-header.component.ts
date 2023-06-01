import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent {
  constructor(private modalService: ModalService) {}

  toggleModal(): void {
    this.modalService.ToggleModalVisibility();
  }
}
