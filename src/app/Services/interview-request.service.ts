import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterviewRequest } from '../models/InterviewRequest';

@Injectable({
  providedIn: 'root'
})
export class InterviewRequestService {

  private baseUrl =  'http://localhost:8089/pidev/interview-requests'; 
  constructor(private http: HttpClient) { }

  

  retrieveAllByCompany(companyId: number): Observable<InterviewRequest[]> {
    return this.http.get<InterviewRequest[]>(`${this.baseUrl}/getallBycompany/${companyId}`);
  }

  accepterDemande(requestId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/accept/${requestId}`, {});
  }

  refuserDemande(requestId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${requestId}`, {});
  }

  retrieveAcceptedRequests(): Observable<InterviewRequest[]> {
    return this.http.get<InterviewRequest[]>(`${this.baseUrl}/accepted`);
  }

  retrieveRejectedRequests(): Observable<InterviewRequest[]> {
    return this.http.get<InterviewRequest[]>(`${this.baseUrl}/rejected`);
  }

  uploadCv(id: number ,cvFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('cv', cvFile);
    return this.http.post(`${this.baseUrl}/uploadCv/`+id, formData);
  }
  
}