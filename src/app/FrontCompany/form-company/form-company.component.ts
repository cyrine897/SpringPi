import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import { Offer  } from '../../models/offer';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  
  listOffer:Offer[] = [];
  offer:Offer;
  form:boolean;
  closeResult:string;
  existingDomains: string[] = ['Informatique', 'génie des télécommunications', 'génie civil', 'génie électromécanique', 'Gestion', 'Informatique de Gestion'];

  existingCitys: string[] = ['Tunis', 'Ariana', 'Manouba', 'Ben Arous', 'Nabeul', 'sousse'];
  
  formOffer : FormGroup ; 
  submitted : boolean = false ;
  modal1: NgbModalRef;
  constructor(private offerService:OfferService ,
    private modalService:NgbModal , 
    private router : Router,
    private fb:FormBuilder)
  { 
    this.formOffer = this.fb.group(
      {
        companyName :['' , Validators.required],
        name :['' , Validators.required],
        domain :['' , Validators.required],
        description :['' , Validators.required],
        expectedSkills :['' , Validators.required],
        dateOffer :['' , Validators.required],
        city :['' , Validators.required],
        typeOffer:['' , Validators.required],
      }
    )
  }

  ngOnInit():void{
    this.getAllOffers();
    
    this.offer={
      
      idOffer:0,
      companyName: '',
      name: '',
      domain: '',
      description:'',
      expectedSkills: '',
      dateOffer: '' ,
      city:'' ,
      typeOffer :null
    }
  }
  getAllOffers() {
    this.offerService.getAllOffers().subscribe(
      (res: Offer[]) => {
        this.listOffer = res;
        console.log(this.listOffer);
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
         
  }

  open(content: any) {
    this.modal1 = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
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
    updateOffer(offer: Offer){
      this.offerService.updateOffer(offer).subscribe();
    }
    


    removeOffer(idOffer: any) {
      const confirmDelete = confirm("Are you sure you want to delete this offer?");
      if (confirmDelete) {
        this.offerService.removeOffer(idOffer).subscribe(
          () => {
            // Suppression réussie
            this.getAllOffers();
            console.log("Offer deleted successfully");
            // Vous pouvez également afficher un message à l'utilisateur ici si nécessaire
          },
          error => {
            // Gestion des erreurs
            console.error("Error deleting offer:", error);
            // Afficher un message d'erreur à l'utilisateur si nécessaire
          }
        );
      } else {
        // L'utilisateur a annulé la suppression
        console.log("Suppression annulée");
      }
    }
    
    onSubmit()
    {
        this.submitted = true ;
        if(this.formOffer.invalid)
          {
           return ;
          }

          
          let offer:Offer= new Offer();
          offer.companyName = this.formOffer.get('companyName').value ;
          offer.name = this.formOffer.get('name').value ;
          offer.domain = this.formOffer.get('domain').value ;
          offer.expectedSkills = this.formOffer.get('expectedSkills').value ;
          offer.description = this.formOffer.get('description').value ;
          offer.dateOffer = this.formOffer.get('dateOffer').value ;
          offer.city = this.formOffer.get('city').value ;
          offer.typeOffer = this.formOffer.get('typeOffer').value ;

          this.offerService.addAffectOffer(1,offer).subscribe(() => {
            this.getAllOffers();
            this.submitted = false;
            this.formOffer.reset() ;
            this.modal1.close('Add click'); 
          });

    }
    
  }

