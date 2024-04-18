import { Component, OnInit } from '@angular/core';

import { CallForTenderService } from 'src/app/Services/callfortender.service';
import { CallForTender } from 'src/app/models/callfortender';
import { User } from 'src/app/models/user';
import { FormsModule } from '@angular/forms';
import { Observable,  of } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-appeloffre',
  templateUrl: './add-appeloffre.component.html',
  styleUrls: ['./add-appeloffre.component.css'],
  providers :[CallForTenderService]
})
export class addappeloffrecomponent {


  private baseUrl = 'http://localhost:8089/pidev/callfortenders';
  ajouterCallForTenderForm: FormGroup=new FormGroup({});
  showPopup: boolean = false;
  selectedFile!: File;
  nouveauCallForTender: CallForTender = {
    idCOT: 0,
    description: '',
    quantity: 0,
    name: '',
    admin: {} as User,
    eventOrganizers: [],
    fichierPDF :''
  };
  
  pdfFileName: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private callForTenderService: CallForTenderService,
    
    
  ) {
    this.selectedFile = new File([], 'default.pdf');
  }

  ngOnInit(): void {
    this.ajouterCallForTenderForm = this.formBuilder.group({
      description: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]], // Ajout de Validators.min(0)
      name: ['', Validators.required],
      // Ajoutez d'autres champs et validations au besoin
    });

    // Pré-remplir les valeurs du formulaire si nécessaire
    // this.ajouterCallForTenderForm.patchValue({
    //   description: 'Votre valeur par défaut',
    //   quantity: 42,
    //   name: 'Un autre exemple',
    // });
  }

  ajouterCallForTender(): void {
    this.callForTenderService.addCallForTender(this.ajouterCallForTenderForm.value, this.selectedFile).subscribe(
      (response) => {
        console.log('Appel d\'offres ajouté avec succès : ', response);
        
        // Récupération de l'identifiant de l'appel d'offres nouvellement créé
        const callForTenderId = response.idCOT; // Assurez-vous que le service retourne l'identifiant correctement
        // Appel de la fonction pour télécharger le fichier PDF
        this.uploadPDF(this.selectedFile, callForTenderId);  
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'appel d\'offres : ', error);
        // Gestion de l'erreur ici
      }
    );
  }
  
  uploadPDF(file: File, callForTenderId: number): void {
    if (file) { // Vérifiez si le fichier est défini avant d'appeler le service
      // Appel du service pour télécharger le fichier PDF
      this.callForTenderService.uploadPDF(file, callForTenderId).subscribe(
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
  resetForm() {
    this.ajouterCallForTenderForm.reset();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  closePopup() {
    // Fermer la fenêtre contextuelle
    this.showPopup = false;
  }
}
