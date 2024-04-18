import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/Services/task.service';
import { TypeTask } from 'src/app/models/typeTask';
import { Router } from '@angular/router';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers :[TaskService]

})
export class TaskListComponent implements OnInit{
  private baseUrl = 'http://localhost:8089/pidev/back/task'; // Remplacez cela par l'URL réelle de votre backend
  listTask: Task[] = [];
 
  constructor(public dialog: MatDialog ,private http: HttpClient , private taskService : TaskService , private router: Router ) {}


  ngOnInit(): void {
    this.getTasks();
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
   
  
  editTask(task: Task){
    this.taskService.updateTask(task).subscribe();
  }
 
  

  deleteTask(idTask: number){
    this.taskService.removeTask(idTask).subscribe( data => {
      console.log(data);
      this.getTasks();
    })
  }

  openCrudModal(task: Task): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        task: task,
        listTask: this.listTask  // Pass the list of tasks
      }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The modal was closed', result);
      // Handle any logic after the modal is closed
    });
  }
  
  openCrudAdd(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: this.listTask, // Utilisez la propriété task ici
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The modal was closed', result);
      // Autres logiques après la fermeture du modal
    });
  }
  
 /* open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = Closed with: ${result};
    }, (reason) => {
      this.closeResult = Dismissed ${this.getDismissReason(reason)};
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  with: ${reason};
      }
    }
    closeForm(){
  
    }
    cancel(){
      this.form = false;
    }
    editPack(pack: Pack){
      this.packService.editPack(pack).subscribe();
    }
    deletePack(idPack : any){
      this.packService.deletePack(idPack).subscribe(() => this.getAllPacks())
    }  
  }*/
  
}

