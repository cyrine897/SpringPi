import { Component } from '@angular/core';
import { ParticipationService } from 'src/app/Services/participation.service';
import { Participation } from 'src/app/models/participation';


@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent {
  participations: Participation[] = [];
  showButtons = true;
  constructor(private participationService: ParticipationService ) { }

  ngOnInit(): void {
    this.loadParticipations();
  }

  loadParticipations(): void {
    this.participationService.getAllParticipations().subscribe(
      (participations: Participation[]) => {
        this.participations = participations;
      },
      (error) => {
        console.error('Erreur lors du chargement des participations : ', error);
      }
    );
  }
 
  refuserParticipation(idp : number ){
  
    this.participationService.deleteParticipation(idp).subscribe(
      () => {
        // Suppression réussie, recharger la liste des callForTenders
        this.loadParticipations();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update(idp: number) {
    const participationToUpdate = this.participations.find(participation => participation.idP === idp);
    if (!participationToUpdate) {
      console.error('Participation introuvable');
      return;
    }
  
    // Mettre à jour la propriété accepted de la participation
    participationToUpdate.accepted = true;
  
    this.participationService.updateParticipation(idp, participationToUpdate).subscribe(
      () => {
        // Mise à jour réussie, rechargement de la liste des participations
        this.loadParticipations();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
