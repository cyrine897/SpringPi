import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'

import { ParticipantRequestService } from 'src/app/Services/participant-request.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { ParticipantRequest } from 'src/app/models/participantRequest';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importer DomSanitizer
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assignment-list-component',
  templateUrl: './assignment-list-component.component.html',
  styleUrls: ['./assignment-list-component.component.css']
})
export class AssignmentListComponentComponent {

  @ViewChild('content') popupview !: ElementRef;

  Invoiceheader: any;
  invoiceno: any;
  affectationRequests: any[] = [];
  userForm: FormGroup; // Assurez-vous que cette propriété est correctement initialisée
  users: any[]; // Déclarez le tableau users avec le type approprié

  constructor(private formBuilder: FormBuilder,private sanitizer: DomSanitizer,private modelService : NgbModal, private taskService: TaskService , private participantRequestService: ParticipantRequestService) {
    // Initialisez le tableau users avec les données des utilisateurs
    this.users = [
      {
        userName: 'cyrine',
        mail: 'cyrine.mezzi@esprit.tn',
        role: 'ORGANISER',
        address: 'rades',
        // Ajoutez d'autres propriétés d'utilisateur ici
      },
      
      // Ajoutez d'autres utilisateurs au besoin
    ];
  }

// assignment-list-component.component.ts
/*ngOnInit(): void {
  this.taskService.getAffectationRequests(this.userForm).subscribe(
    (requests) => {
      // Traitement des demandes d'affectation
      console.log('Demandes d\'affectation chargées avec succès :', requests);
      this.affectationRequests = requests;
    },
    (error) => {
      console.error('Erreur lors du chargement des demandes d\'affectation', error);
    }
  );
}*/
listParticipantRequest: ParticipantRequest[] = [];
 


ngOnInit(): void {
  this.getParticipantRequests();
}

getParticipantRequests(): void {
  this.participantRequestService.getAllParticipantRequests().subscribe(
    (res: ParticipantRequest[]) => {
      this.listParticipantRequest = res;
      console.log(this.listParticipantRequest);
    },
    (error) => {
      console.error('Error fetching tasks:', error);
    }
  );
}
openPDF(pdfData: string, fileName: string ): void {
  const byteCharacters = atob(pdfData);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });

  // Créer un lien de téléchargement
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  
  // Cliquez sur le lien pour démarrer le téléchargement
  link.click();
}





  

  // ... Autres méthodes et propriétés de votre composant ...


acceptRequest(requestId: number): void {
    this.taskService.acceptAffectationRequest(requestId).subscribe(
        () => {
            // Mettez à jour la liste des demandes après l'acceptation
        },
        (error) => {
            console.error('Erreur lors de l\'acceptation de la demande d\'affectation', error);
        }
    );
}

rejectRequest(requestId: number): void {
    this.taskService.rejectAffectationRequest(requestId).subscribe(
        () => {
            // Mettez à jour la liste des demandes après le refus
        },
        (error) => {
            console.error('Erreur lors du refus de la demande d\'affectation', error);
        }
    );
}

 
}

