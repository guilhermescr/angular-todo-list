import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  isModalVisible!: boolean;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.isModalVisible.subscribe((isVisible) => {
      this.isModalVisible = isVisible;
    });
  }
}
