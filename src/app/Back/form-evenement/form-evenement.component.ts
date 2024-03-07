import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ServiceEvenementService } from 'src/app/Services/service-evenement.service';
import { Evenement } from 'src/app/models/evenement';

@Component({
  selector: 'app-form-evenement',
  templateUrl: './form-evenement.component.html',
  styleUrls: ['./form-evenement.component.css'],
  providers :[ServiceEvenementService]
})
export class FormEvenementComponent implements OnInit  {
evenement:Evenement[] = [];
event:Evenement | undefined;
[x: string]: any;
  form: boolean = false;;
  closeResult : any;
  private baseUrl = 'http://localhost:8089/pidev/Evenement'; // Remplacez cela par l'URL réelle de votre backend
  evenementForm: FormGroup = new FormGroup({});
  
  

constructor(private fb: FormBuilder, private evenementService: ServiceEvenementService, private router : Router, private modalService:NgbModal) {}
ngOnInit():void{
  this.getAllEvents();
  this.event={
    idEvenement:0,
    nom:'',
    dateEvenement: new Date() ,
    description:'',
  }
}

open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

closeForm(){
  
}
cancel(){
  this.form = false;
}


addEvenement(event : any) {
  console.log('Form Data:', this.evenementForm.value);
  this.evenementService.addEvenement(event).subscribe(() => {
    // Gérer les données de réponse selon vos besoins
    this.getAllEvents();
  });
}

  
  navigateToFormEvenement() {
    this.router.navigate(['/Formevenement']);
  }

  getAllEvents() {
    this.evenementService.retriveEvenements().subscribe(
      (res: Evenement[]) => {
        this.evenement= res;
        console.log(this.evenement);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
         
  }
  UpdateEvenement(evenement: Evenement){
    this.evenementService.updateEvenement(1,evenement).subscribe();
  }
  deleteEvenement(idEvenement : any){
    this.evenementService.deleteEvenement(idEvenement).subscribe(() => this.getAllEvents())
  } 
  
}
