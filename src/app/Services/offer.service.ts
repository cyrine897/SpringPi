import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';
import { InterviewRequest } from '../models/InterviewRequest';
@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://localhost:8089/pidev/offer'; 

  constructor(private http: HttpClient) { }

  addInterviewRequest(interviewRequest: any, offerId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addInterviewRequest/${offerId}`, interviewRequest);
  }

  
  uploadCv(id: number ,cvFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('cv', cvFile);
    return this.http.post(`${this.apiUrl}/uploadCv/`+id, formData);
  }

  getAllOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllOffer`)
  }
  addOffer(offer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addOffer/`, offer)
  }

  addAffectOffer(userId: number, offer: Offer): Observable<any> {
    return this.http.post(`${this.apiUrl}/addAffectOffer/${userId}`, offer)
  }

  updateOffer(offer: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateOffer`, offer)
  }

  retrieveOffer(idOffer: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/retriveOffer/${idOffer}`)
  }

  removeOffer(idOffer: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeOffer/${idOffer}`)
  }

  getOfferByDomain(domain: string): Observable<Offer[]> {
    const url = `${this.apiUrl}/retrieveOfferByDomain/${domain}`;
    return this.http.get<Offer[]>(url);
  }

  getOffersByType(offerType: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers?type=${offerType}`);
  }

  

  }
