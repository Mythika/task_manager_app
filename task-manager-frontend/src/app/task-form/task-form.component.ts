import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    const newTask = { title: this.title, description: this.description };
    this.taskService.createTask(newTask).subscribe(response => {
      console.log('Task added', response);
    });
  }
}
