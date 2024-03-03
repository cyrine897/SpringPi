import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceParticipantService } from 'src/app/Services/service-participant.service';
import { Participant } from 'src/app/models/participant';
import { ParticipantType } from 'src/app/models/participant-type';
import { DegreeType } from 'src/app/models/degree-type';
import { SpecialityType } from 'src/app/models/speciality-type';
@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrls: ['./form-participant.component.css'],
  providers :[ServiceParticipantService]
})
export class FormParticipantComponent implements OnInit  {
  private baseUrl = 'http://localhost:8089/pidev/participant'; // Remplacez cela par l'URL réelle de votre backend
  participantForm: FormGroup = new FormGroup({});
  participantTypes: string[] = Object.values(ParticipantType);
  specialityTypes: string[] = Object.values(SpecialityType);
  degreeTypes: string[] = Object.values(DegreeType);

constructor(private fb: FormBuilder, private participantService: ServiceParticipantService, private router : Router) {}
ngOnInit(): void {
  this.participantForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    birth_date: ['', Validators.required],
    availability: ['', Validators.required], // Update to availability
    specialityType: ['', Validators.required], // Keep as specialityType
    participantType: ['', Validators.required], // Keep as specialityType

    degreeType: ['', Validators.required], // Keep as degreeType
    message: ['', Validators.required],
    whyJoin: ['', Validators.required],
    cv: [null, Validators.required],
    motivationLetter: [null, Validators.required]
  });
}


addParticipant(): void {
  console.log('Form Data:', this.participantForm.value);
  this.participantService.addParticipant(this.participantForm.value).subscribe((data) => {
    // Gérer les données de réponse selon vos besoins
    console.log('Participant ajouté avec succès:', data);
  });
}
handleButtonClick() {
  this.addParticipant();
  this.affecterParticipantEvenement(1, 2);
}
  
  navigateToFormParticipant() {
    this.router.navigate(['/Formparticipant']);
  }
  affecterParticipantEvenement(idUser: number, idEvenement: number) {
    this.participantService.affecterParticipantEvenement(idUser, idEvenement).subscribe(
      () => {
        console.log('Affectation réussie');
      },
      (error) => {
        console.error('Erreur lors de l\'affectation', error);
      }
    );
  }
}
