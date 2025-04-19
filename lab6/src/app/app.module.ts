import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from './task.model';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgFor } from "@angular/common";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgFor,
    CommonModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
