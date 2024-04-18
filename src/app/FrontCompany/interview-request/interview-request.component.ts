import { Component, OnInit } from '@angular/core';
import { InterviewRequestService } from 'src/app/Services/interview-request.service';
import { InterviewRequest } from '../../models/InterviewRequest';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';


@Component({
  selector: 'app-interview-request',
  templateUrl: './interview-request.component.html',
  styleUrls: ['./interview-request.component.css']
})
export class InterviewRequestComponent implements OnInit {

  companyId: number; // Variable pour stocker l'ID de l'entreprise actuellement connectée
  
  interviewRequests: InterviewRequest[];
  loading: boolean = false;
  error: string = '';
  
  acceptedInterviewRequests: InterviewRequest[];
  rejectedInterviewRequests: InterviewRequest[];


   selectedInterviewRequest: InterviewRequest; 
  currentFileUplaod : File ;

  constructor(private interviewRequestService: InterviewRequestService  ,private modalService:NgbModal , private router : Router) { }

  ngOnInit(): void {
    // Initialiser l'ID de l'entreprise à partir des informations de connexion (par exemple, depuis le token JWT)
    this.companyId = 1; // Exemple, assurez-vous de récupérer correctement l'ID de l'entreprise
   this.retrieveInterviewRequests();
    
   this.loadAcceptedRequests();
    this.loadRejectedRequests();
    
   
  }
  

  retrieveInterviewRequests(): void {
    this.loading = true;
    this.error = '';
    this.interviewRequestService.retrieveAllByCompany(this.companyId)
      .subscribe(
        (interviews: InterviewRequest[]) => {
          this.interviewRequests = interviews;
          this.loading = false;
        },
        (error: any) => {
          this.error = 'Une erreur s\'est produite lors du chargement des demandes d\'entretien.';
          this.loading = false;
        }
      );
  }


  accepterDemande(requestId: number): void {
    this.interviewRequestService.accepterDemande(requestId).subscribe(
      () => {
        console.log('Demande d\'entretien acceptée avec succès');
        this. retrieveInterviewRequests(); // Recharger les demandes après avoir accepté une demande
      },
      (error) => {
        console.log('Erreur lors de l\'acceptation de la demande d\'entretien : ', error);
      }
    );
  }

  refuserDemande(requestId: number): void {
    this.interviewRequestService.refuserDemande(requestId).subscribe(
      () => {
        console.log('Demande d\'entretien refusée avec succès');
        this. retrieveInterviewRequests(); // Recharger les demandes après avoir refusé une demande
      },
      (error) => {
        console.log('Erreur lors du refus de la demande d\'entretien : ', error);
      }
    );
  }
  loadAcceptedRequests(): void {
    this.interviewRequestService.retrieveAcceptedRequests().subscribe(
      (data: InterviewRequest[]) => {
        this.acceptedInterviewRequests = data;
      },
      (error) => {
        console.error('Error loading accepted requests:', error);
      }
    );
  }

  loadRejectedRequests(): void {
    this.interviewRequestService.retrieveRejectedRequests().subscribe(
      (data: InterviewRequest[]) => {
        this.rejectedInterviewRequests = data;
      },
      (error) => {
        console.error('Error loading rejected requests:', error);
      }
    );
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file ) {
      this.currentFileUplaod = file ; 
      this.selectedInterviewRequest.cv = file; 
    }
  }


}


