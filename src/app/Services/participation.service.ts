import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participation } from '../models/participation';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  private apiUrl = 'http://localhost:8089/pidev/Participation'; // URL de votre API Spring Boot
  

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer toutes les participations
  getAllParticipations(): Observable<Participation[]> {
    return this.httpClient.get<Participation[]>(`${this.apiUrl}/list-all-participation`);
  }

  // Méthode pour créer une nouvelle participation
  createParticipation(participation: Participation): Observable<Participation> {
    return this.httpClient.post<Participation>(`${this.apiUrl}/add-a-participation`, participation);
  }

  // Méthode pour mettre à jour une participation existante
  updateParticipation(id: number, participation: Participation): Observable<Participation> {
    
    return this.httpClient.put<Participation>(`${this.apiUrl}/${id}`, participation);
  }

  // Méthode pour supprimer une participation
  deleteParticipation(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

   // Méthode pour télécharger un fichier PDF pour une participation spécifique
   uploadPDF(file: File, participationId: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<any>(`${this.apiUrl}/${participationId}/upload-pdf`, formData);
  }
}