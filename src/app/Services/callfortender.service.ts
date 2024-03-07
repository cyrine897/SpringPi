// src/app/callfortender.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CallForTender } from '../models/callfortender';

@Injectable({
  providedIn: 'root',
})
export class CallForTenderService {
  private baseUrl = 'http://localhost:8089/pidev/callfortenders';

  constructor(private httpClient: HttpClient) {}

  addCallForTender(callForTenderData: any, file: File): Observable<CallForTender> {
    const formData = new FormData();
    formData.append('callForTenderData', JSON.stringify(callForTenderData));
    formData.append('file', file);
    return this.httpClient.post<CallForTender>(`${this.baseUrl}/add-a-call`, callForTenderData);
  }

  getAllCallForTenders(): Observable<CallForTender[]> {
    return this.httpClient.get<CallForTender[]>(`${this.baseUrl}/list-all-calls`);
  }

  getCallForTenderById(id: number): Observable<CallForTender> {
    return this.httpClient.get<CallForTender>(`${this.baseUrl}/${id}`);
  }

  updateCallForTender(id: number, callForTender: CallForTender): Observable<CallForTender> {
    return this.httpClient.put<CallForTender>(`${this.baseUrl}/${id}`, callForTender);
  }

  deleteCallForTender(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
  search(query: string): Observable<any[]> {
    // Implémentez ici votre logique de recherche
    // Cela peut inclure une requête HTTP à un serveur, une recherche dans une liste locale, etc.

    // Dans cet exemple, nous renvoyons simplement une liste de résultats factice
    const results = ['Résultat 1', 'Résultat 2', 'Résultat 3'];
    return of(results);
  }

}


