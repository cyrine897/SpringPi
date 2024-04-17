import { Component, OnInit } from '@angular/core';

import { OfferService } from 'src/app/Services/offer.service';
import { Offer  } from '../../models/offer';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(private offerService:OfferService ,private modalService:NgbModal , private router : Router)
  { }

  ngOnInit():void{
    this.getAllOffers();
    
    this.offer={
      
      idOffer:0,
      name: '',
      description:'',
      dateOffer: '' ,
      domain: '',
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
  addOffer(offer: any){
    this.offerService.addAffectOffer(2,offer).subscribe(() => {
      this.getAllOffers();
      this.form = false;
    });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    updateOffer(offer: Offer){
      this.offerService.updateOffer(offer).subscribe();
    }
    removeOffer(idOffer : any){
      this.offerService.removeOffer(idOffer).subscribe(() => this.getAllOffers())
    }  
    showInterviews(idOffer: number) {
      this.router.navigate(['interview/'+idOffer]);
      }
    
  }

