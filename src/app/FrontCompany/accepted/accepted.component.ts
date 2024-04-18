
import { Component, OnInit } from '@angular/core';
import { InterviewRequestService } from 'src/app/Services/interview-request.service';
import { InterviewRequest } from '../../models/InterviewRequest';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})

export class AcceptedComponent implements OnInit {
  interviewRequests: InterviewRequest[];
  loading: boolean = false;
  error: string = '';
  
  acceptedInterviewRequests: InterviewRequest[];

  constructor(private interviewRequestService: InterviewRequestService  ,
    private modalService:NgbModal , private router : Router) { }
  ngOnInit(): void {
    
    
   this.loadAcceptedRequests();
  
    
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


  

}
