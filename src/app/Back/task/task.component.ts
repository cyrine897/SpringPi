// task.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';
import { TypeTask } from 'src/app/models/typeTask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  listTask: Task[] = [];
  task: Task;
  form: boolean;
  closeResult: string;
  typeTask: TypeTask;
  searchQuery: string;
  searchResults: any[];
    searchText: string = '';
  typeTaskOptions = Object.values(TypeTask);


  constructor(
    private taskService: TaskService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTasks();
    this.task = {
      idTask: 0,
      description: '',
      name: '',
      typeTask: null
    };
  }
  onSearchTextChanged(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);

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
  addTasks(task: Task){
    this.taskService.addTask(task).subscribe(() => {
      this.getTasks();
      this.form = false;
    });
  }
  search() {
    this.taskService.search(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }

  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeForm(): void {
    // Faire ce que vous voulez ici
  }

  cancel(): void {
    this.form = false;
  }

  editTask(task: Task): void {
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(idTask: any): void {
    this.taskService.removeTask(idTask).subscribe(() => this.getTasks());
  }

  showBooth(idTask: number): void {
    this.router.navigate(['booth/' + idTask]);
  }
}