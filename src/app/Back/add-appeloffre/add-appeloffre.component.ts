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

  nouveauCallForTender: CallForTender = {
    idCOT: 0,
    description: '',
    quantity: 0,
    name: '',
    admin: {} as User,
    eventOrganizers: [],
    pdfFileName: ''
  };
  selectedFile: File | null = null ;
  pdfFileName: any;
  constructor(
    private formBuilder: FormBuilder,
    private callForTenderService: CallForTenderService
  ) {}

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

  ajouterCallForTender() {
    if (this.ajouterCallForTenderForm.valid && this.selectedFile) {
      this.callForTenderService
        .addCallForTender(this.ajouterCallForTenderForm.value, this.selectedFile)
        .subscribe(
          (resultat) => {
            console.log('CallForTender ajouté avec succès :', resultat);
            this.pdfFileName = resultat.pdfFileName; // Récupérer le nom du fichier PDF
            this.resetForm();
          },
          (erreur) => {
            console.error("Erreur lors de l'ajout du CallForTender :", erreur);
          }
        );
    }
  }

  resetForm() {
    this.ajouterCallForTenderForm.reset();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

