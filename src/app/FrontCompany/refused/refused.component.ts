import { Component, OnInit } from '@angular/core';
import { InterviewRequestService } from 'src/app/Services/interview-request.service';
import { InterviewRequest } from '../../models/InterviewRequest';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-refused',
  templateUrl: './refused.component.html',
  styleUrls: ['./refused.component.css']
})
export class RefusedComponent implements OnInit {
  interviewRequests: InterviewRequest[];
  loading: boolean = false;
  error: string = '';
  
  rejectedInterviewRequests: InterviewRequest[];

  constructor(private interviewRequestService: InterviewRequestService  ,
    private modalService:NgbModal , private router : Router) { }
  ngOnInit(): void {
    
    
   this.loadRejectedRequests();
  
    
  }
  
  loadRejectedRequests(): void {
    this.interviewRequestService.retrieveRejectedRequests().subscribe(
      (data: InterviewRequest[]) => {
        this.rejectedInterviewRequests = data;
      },
      (error) => {
        console.error('Error loading accepted requests:', error);
      }
    );
  }

}
