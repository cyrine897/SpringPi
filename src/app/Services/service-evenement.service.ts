import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from '../models/evenement';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ServiceEvenementService {
  private baseUrl = 'http://localhost:8089/pidev/Evenement'; // Replace this with the actual URL of your backend
  private InterfAdd = '/addEvenement';
  private InterfUpdate = '/updateEvenement'; 
  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  retriveEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.baseUrl}/getAllEvenement`);
  }

  retriveEvenement(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.baseUrl}/${id}`);
  }

  addEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.baseUrl}/addEvenement`, evenement);
  }

  updateEvenement(id: number, evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.baseUrl}${this.InterfUpdate}/${id}`, evenement);
  }

  deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  searchEvenementsByName(query: string): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.baseUrl}/searchByName?query=${query}`);
  }

  generateQRCodeImage(eventId: number): Observable<Blob> {
    return this.http.get(`http://localhost:8089/pidev/api/qrcode/generate/${eventId}`, { responseType: 'blob' });
}

updateLocation(id: number, latitude: number, longitude: number): Observable<any> {
  const url = `${this.baseUrl}/updateLocation/${id}?latitude=${latitude}&longitude=${longitude}`;
  return this.http.put(url, null);
}

}
