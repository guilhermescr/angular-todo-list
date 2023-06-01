import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isModalVisibleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isModalVisible: Observable<boolean> =
    this.isModalVisibleSubject.asObservable();

  private isCreateModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public isCreateMode: Observable<boolean> =
    this.isCreateModeSubject.asObservable();

  private previousTaskTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public previousTaskTitle: Observable<string> =
    this.previousTaskTitleSubject.asObservable();

  constructor() {}

  ToggleModalVisibility(): void {
    this.isModalVisibleSubject.next(!this.isModalVisibleSubject.value);
  }

  ToggleModalMode(modalMode: string): void {
    this.isCreateModeSubject.next(modalMode === 'create');
  }

  SetPreviousTaskTitle(prevTaskTitle: string): void {
    this.previousTaskTitleSubject.next(prevTaskTitle);
  }

  GetPreviousTaskTitle(): string {
    return this.previousTaskTitleSubject.value;
  }
}
