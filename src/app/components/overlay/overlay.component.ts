import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  isModalVisible!: boolean;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.isModalVisible.subscribe((isVisible) => {
      this.isModalVisible = isVisible;
    });
  }
}
