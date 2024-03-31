import { HttpClient, HttpEventType } from '@angular/common/http';
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
   
  GenerateInvoicePDF(invoiceno:any){
    return this.http.get('https://localhost:8089/pidev/Invoice/generatepdf?InvoiceNo='+invoiceno,{observe:'response',responseType:'blob'});
    
  }
 
  

 
}
