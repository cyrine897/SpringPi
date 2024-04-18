import { Component } from '@angular/core';
import { ParticipantRequestService } from 'src/app/Services/participant-request.service';
import { TypeTask } from 'src/app/models/typeTask';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { MatCalendarBody } from '@angular/material/datepicker';
import { MatCalendar } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ParticipantRequest } from 'src/app/models/participantRequest';
import{} from 'node_modules/chart.js/dist/Chart.min.js';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  statistics: Map<TypeTask, number>; 
  chart: any;
  participantChart: any;
 

  // Initialisez la propriété customHeader avec le composant d'en-tête personnalisé
  customHeader = ParticipantRequest;
  constructor(private participantRequestService: ParticipantRequestService , private http : HttpClient) { } 

  
  ngOnInit(): void {
   this.RenderChart();
   this.renderBarChart();
    this.participantRequestService.getParticipantStatistics().subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.participantChart = new Chart('participantChart', {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Nombre de participants',
            data: values,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Set to false to allow custom dimensions
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: 'Participant Statistics'
            }
          },
          layout: {
            padding: {
              left: 50,
              right: 50,
              top: 10,
              bottom: 20
            }
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Number of Participants'
              }
            }
          }
        }
      });
      
    });
  }
  
 RenderChart() {
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
  
    const pieChart = new Chart("piechart", {
      type: 'pie',
      data: data,
    });
  }




  months(options: { count: number }): string[] {
    // Logique pour générer les mois
    return [];
  }
 
  
  renderBarChart(): void {
    // Récupérer les données des statistiques des participants
    this.participantRequestService.getParticipantStatistics().subscribe(data => {
      // Extraire les libellés et les valeurs à partir des données
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
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

      // Récupérer le canvas pour le graphique à barres
      const canvas = <HTMLCanvasElement>document.getElementById('barChart');
      const ctx = canvas.getContext('2d');

      // Créer le graphique à barres
      new Chart(ctx, {
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