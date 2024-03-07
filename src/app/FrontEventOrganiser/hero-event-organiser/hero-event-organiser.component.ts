import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CallForTenderService } from 'src/app/Services/callfortender.service';
import { CallForTender } from 'src/app/models/callfortender';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-hero-event-organiser',
  templateUrl: './hero-event-organiser.component.html',
  styleUrls: ['./hero-event-organiser.component.css']
})
export class HeroEventOrganiserComponent implements OnInit {

  callForTenders: CallForTender[] = [];
  searchText: any;
  
  showPopup: boolean = false;

  ;
  filteredCallForTenders: any[] = [];
searchQuery: string = '';
searchResults: any[] = [];

  constructor(
    private http: HttpClient,
    private callForTenderService: CallForTenderService
  ) { }

  ngOnInit(): void {
    this.loadCallForTenders();
  }

  loadCallForTenders() {
    this.callForTenderService.getAllCallForTenders().subscribe(
      (data) => {
        this.callForTenders = data;
        this.filteredCallForTenders = data;
      },
      (error) => {
        console.error('Error loading call for tenders', error);
      }
    );
  }

  search() {
    this.callForTenderService.search(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  onSearchTextChanged(searchText: string) {
    // Logique à exécuter lorsque le texte de recherche change
    console.log('Search text:', searchText);
  }
}