import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  types = ['bug', 'task'];
  priorities = ['critical', 'high', 'medium', 'low'];
  newTask: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> = {
    type: 'task',
    priority: 'medium',
    status: '',
    title: '',
    creator: ''
  };

  constructor(private taskService: TaskService) { }

  addTask() {
    if (!this.newTask.status || !this.newTask.title || !this.newTask.creator) {
      alert("Пожалуйста, заполните обязательные поля!");
      return;
    }
    this.taskService.addTask(this.newTask);
    this.newTask = { type: 'task', priority: 'medium', status: '', title: '', creator: '' };
  }
}

