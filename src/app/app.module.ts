import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { NewtaskComponent } from './components/newtask/newtask.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, NewtaskComponent, TodoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
