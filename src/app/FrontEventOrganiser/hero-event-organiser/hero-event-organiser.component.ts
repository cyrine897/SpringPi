import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallForTenderService } from 'src/app/Services/callfortender.service';
import { CallForTender } from 'src/app/models/callfortender';

import { Participation } from 'src/app/models/participation'; // Import du modèle de participation
import { FormGroup , FormBuilder} from '@angular/forms';
import { ParticipationService } from 'src/app/Services/participation.service';

@Component({
  selector: 'app-hero-event-organiser',
  templateUrl: './hero-event-organiser.component.html',
  styleUrls: ['./hero-event-organiser.component.css']
})
export class HeroEventOrganiserComponent implements OnInit {
  participationForm!: FormGroup; // Ajout du symbole ! pour initialiser la propriété
  selectedFile!: File;
  callForTenders: CallForTender[] = [];
  searchQuery: string = '';
  showPopup: boolean = false;
  participation: Participation = {
    idP: 0,
    nomEvent: '',
    organisateur: '',
    email: '',
    numeroTelephone: '',
    fichierPDF: '',
    role: '',
    accepted: false,
    
    
  }; // Définition du modèle de participation
  

  constructor(
    private http: HttpClient,
    private callForTenderService: CallForTenderService,
    private participationService: ParticipationService,
    private formBuilder: FormBuilder// Injection du service de participation
  ) {
    this.participationForm = this.formBuilder.group({
      idP: 0,
      nomEvent: '',
      organisateur: '',
      email: '',
      numeroTelephone: '',
      fichierPDF: '',
      role: '', // Définissez les champs de votre formulaire ici
    });
    this.selectedFile = new File([], 'default.pdf');
  }

  ngOnInit(): void {
    this.loadCallForTenders();
    this.participationForm = this.formBuilder.group({
      idP: 0,
      nomEvent: '',
      organisateur: '',
      email: '',
      numeroTelephone: '',
      fichierPDF: '',
      role: '', // définir les champs de votre formulaire
    });
    
  }

  loadCallForTenders() {
    this.callForTenderService.getAllCallForTenders().subscribe(
      (data) => {
        this.callForTenders = data;
        if (this.callForTenders.length > 0) {
          this.participation.nomEvent = this.callForTenders[0].name;
        }
      },
      (error) => {
        console.error('Erreur lors du chargement des appels d\'offres', error);
      }
    );
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

 /* submitForm() {
    // Appel du service de participation pour créer une nouvelle participation
    this.participationService.createParticipation(this.participation).subscribe(
      (response) => {
        console.log('Participation ajoutée avec succès : ', response);
        // Réinitialisation du formulaire après l'ajout
        this.participation ;
        // Fermeture de la fenêtre contextuelle
        this.closePopup();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la participation : ', error);
        // Gestion de l'erreur ici
      }
    );
  }*/
  submitForm(): void {
    // Appel du service de participation pour créer une nouvelle participation
    this.participationService.createParticipation(this.participation).subscribe(
      (response) => {
        console.log('Participation ajoutée avec succès : ', response);
        
        // Récupération de l'identifiant de la participation nouvellement créée
        const participationId = response.idP;
        // Appel de la fonction pour télécharger le fichier PDF
        this.uploadPDF(this.selectedFile, participationId);  
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la participation : ', error);
        // Gestion de l'erreur ici
      }
    );
  }

  uploadPDF(file: File, participationId: number): void {
    if (file) { // Vérifiez si le fichier est défini avant d'appeler le service
      this.participationService.uploadPDF(file, participationId).subscribe(
        () => {
          console.log('PDF téléchargé avec succès.');
          // Effectuez toute autre action nécessaire après le téléchargement réussi du PDF
        },
        (error) => {
          console.error('Erreur lors du téléchargement du fichier PDF : ', error);
          // Gestion de l'erreur ici
        }
      );
    } else {
      console.error('Aucun fichier sélectionné.');
      // Gestion de l'erreur si aucun fichier n'est sélectionné
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Logique pour gérer la sélection de fichier
  }
}
