import { Component, NgModule } from '@angular/core';
import { CallForTenderService } from 'src/app/Services/callfortender.service';
import { CallForTender } from 'src/app/models/callfortender';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-event-organiser',
  templateUrl: './hero-event-organiser.component.html',
  styleUrls: ['./hero-event-organiser.component.css']
})

export class HeroEventOrganiserComponent {
filterCallForTenders() {
throw new Error('Method not implemented.');
}

callForTenders: CallForTender[] = [];
searchText: any;
filteredCallForTenders: any[];

constructor(private callForTenderService: CallForTenderService) {
  this.callForTenders = []; // Initialisez callForTenders avec les données appropriées
  this.filteredCallForTenders = this.callForTenders;
}

ngOnInit(): void {
  this.loadCallForTenders();
}

loadCallForTenders() {
  this.callForTenderService.getAllCallForTenders().subscribe(
    (data) => {
      this.callForTenders = data;
    },
    (error) => {
      console.error('Error loading call for tenders', error);
    }
  );
}
search() {
  if (this.searchText) {
    this.callForTenders = this.callForTenders.filter((callForTender) => {
      return (
        callForTender.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        callForTender.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  } else {
    this.loadCallForTenders();
  }
}

}

