import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoTasksComponent } from './components/todo-tasks/todo-tasks.component';
import { TaskComponent } from './components/todo-tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    TodoModalComponent,
    TodoHeaderComponent,
    TodoTasksComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
