import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent {
  @Input() isModalVisible: boolean = false;
  @Input() toggleModalVisibilityFunction!: () => void;

  toggleModalVisibility(): void {
    this.toggleModalVisibilityFunction();
  }
}
