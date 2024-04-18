// task.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';
import { TypeTask } from 'src/app/models/typeTask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  listTask: Task[] = [];
  task: Task;
  dogBarChart: any; // Déclarer la variable dogBarChart ici

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
    this.RenderDogBar();
    this.RenderChart();
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

  RenderChart() {
    // Appeler la méthode du service pour récupérer les données des tâches
    this.taskService.getTaskStatisticsByTypeTask().subscribe(data => {
      // Convertir les données reçues en un format utilisable par Chart.js
      const labels = Object.keys(data);
      const values = Object.values(data);
  
      // Créer les données du graphique circulaire
      const pieChartData = {
        labels: labels,
        datasets: [{
          label: 'Nombre de tâches',
          data: values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      };
  
      // Récupérer le canvas pour le graphique circulaire
      const canvas = <HTMLCanvasElement>document.getElementById('piechart');
      const ctx = canvas.getContext('2d');
  
      // Créer le graphique circulaire
      const pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
      });
    });
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

  RenderDogBar() {
    // Appeler la méthode du service pour récupérer les données des statistiques des tâches
    this.taskService.getTaskStatisticsByTypeTask().subscribe(data => {
      // Convertir les données reçues en un format utilisable par Chart.js
      const labels = Object.keys(data);
      const values = Object.values(data);
  
      // Créer les données du graphique à barres
      const barChartData = {
        labels: labels,
        datasets: [{
          label: 'Nombre de participants par type de tâche',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1
        }]
      };
  
      // Récupérer le canvas pour le graphique à barres
      const canvas = <HTMLCanvasElement>document.getElementById('dogBarChart');
      const ctx = canvas.getContext('2d');
  
      // Vérifier si un graphique existe déjà et le détruire
      if (this.dogBarChart) {
        this.dogBarChart.destroy();
      }
  
      // Créer le graphique à barres et stocker une référence
      this.dogBarChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
  
  

}