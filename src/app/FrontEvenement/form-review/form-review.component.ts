import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ServiceReviewService } from 'src/app/Services/service-review.service';
import { Review } from 'src/app/models/review';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.css'],
  providers :[ServiceReviewService]
  
})
export class FormReviewComponent implements OnInit  {
review:Review[] = [];
rev:Review | undefined;


[x: string]: any;
  form: boolean = false;;
  closeResult : any;
  private baseUrl = 'http://localhost:8089/pidev/Review'; // Remplacez cela par l'URL réelle de votre backend
  reviewForm: FormGroup = new FormGroup({});
  
  

constructor(private fb: FormBuilder, private reviewService: ServiceReviewService, private router : Router, private modalService:NgbModal) {}
ngOnInit():void{
  this.getAllReviews();
  this.rev={
    idReview : 0,
    comment: '',
    ratings: 0,
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


addReview(rev : any ) {
  console.log('Form Data:', this.reviewForm.value);
  this.reviewService.addReview(rev).subscribe(() => {
    // Gérer les données de réponse selon vos besoins
    this.getAllReviews();
  });
}
handleButtonClick() {
  
  
}
  
  navigateToFormReview() {
    this.router.navigate(['/Formreview']);
  }

  getAllReviews() {
    this.reviewService.retriveReviews().subscribe(
      (res: Review[]) => {
        this.review= res;
        console.log(this.review);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
         
  }
  UpdateReview(review: Review){
    this.reviewService.updateReview(1,review).subscribe();
  }
  deleteReview(idReview : any){
    this.reviewService.deleteReview(idReview).subscribe(() => this.getAllReviews())
  } 
  
  ratingcount=0;
  totalrating=0

  Finalrating:any;

  ratingcontrol=new FormControl(0);
  
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.reviewForm?.value || 0;
    //console.log(this.ratingcontrol.value);
    this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  }
  
}
