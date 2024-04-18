import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Calendar } from 'src/app/models/calendar';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  hoveredDate: NgbDate | null = null;

  events: Calendar[];

  private Url1 = 'http://localhost:8089/pidev'; // Remplacez cela par l'URL réelle de votre backend


 
  constructor(private http: HttpClient, private calendar: NgbCalendar) { }

  onHover(event: any) {
    // Extraire la date de l'événement hover
    this.hoveredDate = event;
  }

  // Fonction pour formater la date sélectionnée
  formatDate(date: NgbDate): string {
    return `${date.year}-${date.month}-${date.day}`;
  }
}
