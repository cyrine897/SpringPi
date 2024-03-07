import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceReviewService {
  private baseUrl = 'http://localhost:8089/pidev/Review'; // Replace this with the actual URL of your backend
  private InterfAdd = '/addReview';
  private InterfUpdate = '/updateReview'; // Assuming this is the correct endpoint for updating

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  retriveReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/getAllReview`);
  }

  retriveReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.baseUrl}/${id}`);
  }

  addReview(review: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addReview`, review);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.baseUrl}${this.InterfUpdate}/${id}`, review);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
