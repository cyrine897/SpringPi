import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Participant } from '../models/participant';
=======
>>>>>>> gestion_participant
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService {
<<<<<<< HEAD
  private baseUrl = 'http://localhost:8089/pidev/participant'; // Remplacez cela par l'URL réelle de votre backend
 private InterfAdd = '/addParticipant';
 private InterfUpdate = '/addParticipant';


  constructor(private http : HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.baseUrl}`);
  }

  getParticipantById(id: number): Observable<Participant> {
    return this.http.get<Participant>(`${this.baseUrl}/${id}`);
  }
  addParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.baseUrl+this.InterfAdd}`, participant);
  }

  affecterParticipantEvenement(idUser: number, idEvenement: number) {
    const url = `${this.baseUrl}/affecter-participant-evenement/${idUser}/${idEvenement}`;
    return this.http.post(url, null);
}

  createParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.baseUrl}`, participant);
  }

  updateParticipant(id: number, participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(`${this.baseUrl}/${id}`, participant);
  }

  deleteParticipant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
=======
  
>>>>>>> gestion_participant

}
