import { Component, Inject, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/models/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { TypeTask } from 'src/app/models/typeTask';
@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /*formData: Task = {
    idTask: 0,
    name: '',
    description: '',
    typeTask: "c:/Users/admin/Desktop/angular - Copie/AngularPidev/src/app/models/typeTask".type1
  };
  listTask: Task[] = [];
 

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task, listTask: Task[] }, // Change the data type
    private taskService: TaskService
  ) {
    this.formData = { ...data.task };
    this.listTask = data.listTask;  // Assign the list of tasks
  }
  


  ngOnInit(): void {
    // If data is provided, populate the form with it
    if (this.data && this.data.task) {
      this.formData = { ...this.data.task }; // Utilize the task property from the data
    }
    this.getTasks();
  }
  
 
  onClose(): void {
    this.dialogRef.close();
  }

  editTask(): void {
    this.taskService.updateTask(this.formData).subscribe(
      updatedTask => {
        const index = this.listTask.findIndex(task => task.idTask === updatedTask.idTask);
        if (index !== -1) {
          this.listTask[index] = updatedTask;
        }
  
        console.log('Task updated successfully');
  
        // Refresh the task list immediately after a successful update
        this.refreshTaskList();
  
        // Close the dialog
        this.dialogRef.close();
      },
      error => {
        console.error('Error updating task:', error);
        // Handle error as needed (e.g., show an error message)
      }
    );
  }
 

 
  addTask(task: any): void {
    this.taskService.addTask(task).subscribe(
      () => {
        console.log('Task added successfully'); // You can handle success as needed
        // You may want to refresh the task list or perform other actions after adding a task
        this.getTasks();
        
      },
      (error) => {
        console.error('Error adding task:', error);
        // Handle the error, display a message, or perform other actions as needed
      }
    );
  }
  getTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (res: Task[]) => {
        this.listTask = res;
        console.log(this.listTask);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  // New method to refresh the task list
  private refreshTaskList(): void {
    this.taskService.getAllTasks().subscribe(
      (res: Task[]) => {
        this.listTask = res;
        console.log(this.listTask);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  
  */
  
  
  
}