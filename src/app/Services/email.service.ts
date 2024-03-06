import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:8089/pidev/email'; // Remplacez par votre URL backend

  constructor(private http: HttpClient) {}

  sendConfirmationEmail(to: string, subject: string, body: string): Observable<any> {
    const url = `${this.baseUrl}/sendEmail`;
    const emailData = { to, subject, body };
    return this.http.post(url, emailData);
  }
}
