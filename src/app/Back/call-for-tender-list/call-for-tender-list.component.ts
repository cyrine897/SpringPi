import { Component } from '@angular/core';
import { CallForTender } from '../../models/callfortender';

import { CallForTenderService } from 'src/app/Services/callfortender.service';


@Component({
  selector: 'app-call-for-tender-list',
  templateUrl: './call-for-tender-list.component.html',
  styleUrls: ['./call-for-tender-list.component.css']
})
export class CallForTenderListComponent {



  callForTenders: CallForTender[] = [];
  searchQuery: string = '';
  filteredCallForTenders: any[] = [];
  searchResults: any[] = [];
  searchPipe: any;
  searchText: any;



  constructor(private callForTenderService: CallForTenderService) {}

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
 
  deleteCallForTender(id: number): void {
    this.callForTenderService.deleteCallForTender(id).subscribe(
      () => {
        // Suppression réussie, recharger la liste des callForTenders
        this.loadCallForTenders();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filterCallForTenders(): CallForTender[] {
    return this.searchPipe.transform(this.callForTenders, this.searchQuery);
  }
  changelist(){
    console.log(this.filteredCallForTenders)
    this.callForTenders=this.filteredCallForTenders
  }
  openEditCallPopup(callForTender: CallForTender) {
    // Ici, vous pouvez définir la logique pour ouvrir une popup pour modifier l'appel d'offres
    // Par exemple, vous pouvez utiliser une librairie de popup comme Angular Material Dialog ou NgbModal de Bootstrap
    console.log('Ouverture de la popup pour modifier l\'appel d\'offres : ', callForTender);
  }
}
  

function openEditCallPopup() {
  // Ouvrez la fenêtre contextuelle ou effectuez les actions nécessaires pour afficher le formulaire du composant "editcall"
  // Par exemple, vous pouvez utiliser la méthode window.open() pour ouvrir une nouvelle fenêtre avec le formulaire :
  window.open('/editcall', 'Edit Call', 'width=500,height=500');
}


