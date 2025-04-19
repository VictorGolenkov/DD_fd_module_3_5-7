import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  isEditing: boolean = false;
  currentTask: Task | null = null;

  editTask(task: Task) {
    this.isEditing = true;
    this.currentTask = { ...task }; 
  }

  saveTask() {
    if (this.currentTask) {
      this.currentTask.updatedAt = new Date();
      this.taskService.updateTask(this.currentTask);
      this.tasks = this.taskService.getTasks();
      this.cancelEdit(); 
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentTask = null;
  }
}
