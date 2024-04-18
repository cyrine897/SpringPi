import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ServiceReviewService } from 'src/app/Services/service-review.service';
import { Review } from 'src/app/models/review';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.css'],
  providers: [ServiceReviewService]
})
export class FormReviewComponent implements OnInit, OnDestroy {

  review: Review[] = [];
  rev: Review | undefined;
  showReviewForm: boolean = false;
  form: boolean = false;
  closeResult: any;
  reviewForm: FormGroup = new FormGroup({});
  private ratingChangeSubscription: Subscription | undefined;
  ratingChangeTriggeredByUser: boolean = true;

  constructor(
    private fb: FormBuilder,
    private reviewService: ServiceReviewService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      comment: ['', Validators.required],
      ratings: [0, Validators.required],
    });
    this.getAllReviews();
    this.subscribeToRatingChange();
  }

  ngOnDestroy(): void {
    // Unsubscribe from value changes to prevent memory leaks
    if (this.ratingChangeSubscription) {
      this.ratingChangeSubscription.unsubscribe();
    }
  }

  toggleReviewForm(): void {
    this.showReviewForm = !this.showReviewForm;
  }

  subscribeToRatingChange() {
    this.ratingChangeSubscription = this.reviewForm.get('ratings')?.valueChanges.subscribe(rating => {
      console.log('Rating:', rating);
      if (rating !== null && this.ratingChangeSubscription) {
        // Unsubscribe from the event after the first change
        this.ratingChangeSubscription.unsubscribe();
      }
    });
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

  closeForm() {
    this.form = false;
  }

  cancel() {
    this.form = false;
  }

  addReview() {
    if (this.reviewForm.valid) {
      const reviewData = this.reviewForm.value;
      this.reviewService.addReview(reviewData).subscribe(() => {
        this.getAllReviews();
        this.reviewForm.reset({ ratings: 0 });
        this.subscribeToRatingChange();
      });
    }
  }

  getAllReviews() {
    this.reviewService.retriveReviews().subscribe(
      (review: Review[]) => {
        this.review = review;
        console.log(this.review);
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  UpdateReview(review: Review) {
    this.reviewService.updateReview(1, review).subscribe();
  }

  deleteReview(idReview: any) {
    this.reviewService.deleteReview(idReview).subscribe(() => this.getAllReviews());
  }

  updateRating(ratings: number) {
    console.log('Rating:', ratings);
    if (this.ratingChangeTriggeredByUser) {
      this.reviewForm.get('ratings')?.setValue(ratings);
    }
    this.ratingChangeTriggeredByUser = true; // Reset the flag
  }
  
  generateStars(rating: number): string[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? 'star' : 'star_border');
    }
    return stars;
  }
}


