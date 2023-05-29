import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}

  CreateTask(): void {
    console.log('You created a task!');
  }
}
