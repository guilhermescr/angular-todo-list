import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isModalOpen: boolean = false;
  toggleModalVisibility = (): void => {
    this.isModalOpen = !this.isModalOpen;
  };

  editTask(): void {}

  deleteTask(): void {}
}
