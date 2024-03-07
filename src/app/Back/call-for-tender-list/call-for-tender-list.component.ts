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

  constructor(private callForTenderService: CallForTenderService) {}

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
  
}
function openEditCallPopup() {
  // Ouvrez la fenêtre contextuelle ou effectuez les actions nécessaires pour afficher le formulaire du composant "editcall"
  // Par exemple, vous pouvez utiliser la méthode window.open() pour ouvrir une nouvelle fenêtre avec le formulaire :
  window.open('/editcall', 'Edit Call', 'width=500,height=500');
}
