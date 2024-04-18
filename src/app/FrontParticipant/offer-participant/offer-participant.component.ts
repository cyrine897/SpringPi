import { Component, OnInit , ElementRef, ViewChild  } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import { Offer } from '../../models/offer';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InterviewRequestService } from 'src/app/Services/interview-request.service';
import { InterviewRequest } from 'src/app/models/InterviewRequest';


@Component({
  selector: 'app-offer-participant',
  templateUrl: './offer-participant.component.html',
  styleUrls: ['./offer-participant.component.css']
})
export class OfferParticipantComponent implements OnInit {
  listOffer: Offer[] = [];
  displayedOffers: Offer[] = [];
  itemsPerPage = 9;
  currentPage = 1;
  searchDomain: string = '';
  closeResult:string;
  form:boolean;
  interviewRequest: InterviewRequest = {
    idInterviewRequest: 0,
    name: '',
    email: '',
    cv: null,
    requestStatus: '',
    offer: null 
  };

  offerId: number; 

  selectedInterviewRequest: InterviewRequest; 
  currentFileUplaod : File ;
  constructor(private offerService: OfferService ,private modalService:NgbModal , private router : Router) {
  
  }

  ngOnInit(): void {
    this.getAllOffers();
  }

  @ViewChild('successMessage') successMessage: ElementRef;

  showSuccessMessage: boolean = false;
  
  addInterviewRequest(interviewRequestData: any, offerId: number) {
    this.offerService.addInterviewRequest(interviewRequestData, offerId)
      .subscribe(
        (res) => {
          this.showSuccessMessage = true;
          this.offerService.uploadCv(res.idInterviewRequest , this.currentFileUplaod).subscribe(res => {
            
          })
        },
        (error) => {
          console.error('Error adding interview request:', error);
        }
      );
  }

  

  getAllOffers() {
    this.offerService.getAllOffers().subscribe(
      (res: Offer[]) => {
        this.listOffer = res;
        this.updateDisplayedOffers();
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }


  updateDisplayedOffers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedOffers = this.listOffer.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedOffers();
  }
  onSearch(): void {
    this.currentPage = 1; // Réinitialiser la page actuelle lors de la recherche
  
    if (this.searchDomain.trim() !== '') {
      this.offerService.getOfferByDomain(this.searchDomain).subscribe(
        (res: Offer[]) => {
          this.listOffer = res;
          this.updateDisplayedOffers();
        },
        (error) => {
          console.error('Error fetching offers:', error);
        }
      );
    } else {
      this.getAllOffers(); // Charger à nouveau toutes les offres
    }
  }
  open(content: any, test) {
    this.offerId = test;
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

    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file ) {
        this.currentFileUplaod = file ; 
        this.selectedInterviewRequest.cv = file; 
      }
    }

}