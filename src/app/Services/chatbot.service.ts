import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8089/pidev/api/chat/response'; 

  constructor(private http: HttpClient) {}

  getChatbotResponse(question: string): Observable<string> {
    const params = { question };
    return this.http.get(this.apiUrl, { params, responseType: 'text' })
      .pipe(
        catchError((error: any) => {
          // Handle errors here if needed
          console.error('Error occurred:', error);
          throw error;
        })
      );
  }
}
