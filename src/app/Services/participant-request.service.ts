import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParticipantRequest } from '../models/participantRequest';
import { Observable, map } from 'rxjs';
import { TypeTask } from '../models/typeTask';
@Injectable({
  providedIn: 'root'
})
export class ParticipantRequestService {
  private Url = 'http://localhost:8089/pidev/participantRequest'; // Remplacez cela par l'URL réelle de votre backend

  constructor(private http : HttpClient) { }
  addOrganiserToTask(ParticipantRequest: ParticipantRequest): Observable<ParticipantRequest> {
    return this.http.post<ParticipantRequest>(`${this.Url}/addOrganiserToTask`, ParticipantRequest);
  }
  getAllParticipantRequests(): Observable<ParticipantRequest[]> {
    return this.http.get<ParticipantRequest[]>(`${this.Url}/getAllParticipantRequest`);
  }
  uploadFile(file: File, email: string,  userName: string  , typeTask : TypeTask): Observable<number> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('userName', userName);
    formData.append('typeTask' , typeTask.toString())
  
    return this.http.post(this.Url + '/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getUploadProgress(event)),
    );
  }
  
  
  private getUploadProgress(event: any): number {
    if (event.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round((event.loaded / event.total) * 100);
      return percentDone;
    }
    return null;
  } 
   
 
  GenerateInvoicePDF(invoiceNo: string, filename: string, contentType: string, userName: string, email: string, typeTask: TypeTask  ): Observable<HttpResponse<Blob>> {
    const url = `http://localhost:8089/pidev/participantRequest/generatepdf?invoiceNo=${invoiceNo}&filename=${filename}&contentType=${contentType}&userName=${userName}&email=${email}&typeTask=${typeTask}`;
    return this.http.get(url, {
      observe: 'response',
      responseType: 'blob'
    });
  }
  getFiles(): Observable<any> {
    return this.http.get<File[]>(this.Url + '/files');
  }


  downloadFile(idParticipantRequest: number): Observable<HttpResponse<Blob>> {
    return this.http.get(this.Url + `/download/${idParticipantRequest}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }
  
  updateParticipantStatus(idParticipantRequest: number, status: string): void {
    this.http.put<any>(`http://localhost:8089/pidev/participantRequest/${idParticipantRequest}/status`, { status })
      .subscribe(() => {
        console.log(`Statut mis à jour avec succès: ${status}`);
      }, error => {
        console.error('Erreur lors de la mise à jour du statut du participant : ', error);
      });
  }
  
  getData(pageNumber: number, pageSize: number): Observable<any> {
    const apiUrl = `http://localhost:8089/pidev/participantRequest?page=${pageNumber}&size=${pageSize}`;
    return this.http.get(apiUrl);
  }
 
}