import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParticipantRequest } from '../models/participantRequest';
import { Observable, map } from 'rxjs';
import { TypeTask } from '../models/typeTask';
import { Status } from '../models/Status';
@Injectable({
  providedIn: 'root'
})
export class ParticipantRequestService {
  private Url = 'http://localhost:8089/pidev/participantRequest'; // Remplacez cela par l'URL réelle de votre backend
  private baseUrl = 'http://localhost:8089/pidev/email'; // Remplacez cela par l'URL réelle de votre backend
  constructor(private http : HttpClient) { }
  addOrganiserToTask(ParticipantRequest: ParticipantRequest): Observable<ParticipantRequest> {
    return this.http.post<ParticipantRequest>(`${this.Url}/addOrganiserToTask`, ParticipantRequest);
  }
  getAllParticipantRequestsStatistics(): Observable<ParticipantRequest[]> {
    return this.http.get<any>(`${this.Url}/statistics`);
  }
  sendConfirmationEmail(email: string) {
    return this.http.post<any>(`${this.baseUrl}/sendEmail`, { email });
  }

  getCountByStatus(status: string) {
    return this.http.get<number>(`${this.Url}/count-by-status?status=${status}`);
  }

  getValidatedParticipantRequestCount(): Observable<number> {
    return this.http.get<number>(`${this.Url}/validated/count`);
  }

  getRejectedParticipantRequestCount(): Observable<number> {
    return this.http.get<number>(`${this.Url}/rejected/count`);
  }
  
  getAllParticipantRequests(): Observable<ParticipantRequest[]> {
    return this.http.get<any>(`${this.Url}/getAllParticipantRequest`);
  }
  

  getParticipantStatistics(): Observable<any> { return this.http.get(`${this.Url}/statistics`); } 
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


  getParticipantRequestStatisticsByTypeTask(): Observable<Map<TypeTask, number>> {
    return this.http.get<Map<TypeTask, number>>(this.Url+ `/stats`);
  }

  getTotalParticipantRequests(): Observable<number> {
    return this.http.get<number>(`${this.Url}/total`);
  }
  getStatsByTypeTask(): Observable<any> {
    return this.http.get(`${this.Url}/stats`);
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
  
 /* acceptParticiperRequest(idParticipantRequest: number): Observable<void> {
    return this.http.put<void>(`${this.Url}/${idParticipantRequest}/accept`, null);
  }

  refuseParticiperRequest(idParticipantRequest: number): Observable<void> {
    return this.http.put<void>(`${this.Url}/${idParticipantRequest}/refuse`, null);
  }
*/
  getAcceptedParticipantRequestsCount(): Observable<number> {
    return this.http.get<number>('http://localhost:8089/pidev/participantRequest/countByStatus?status=accepted');
  }

  getRefusedParticipantRequestsCount(): Observable<number> {
    return this.http.get<number>('http://localhost:8089/pidev/participantRequest/countByStatus?status=refused');
  }
  
  getData(pageNumber: number, pageSize: number): Observable<any> {
    const apiUrl = `http://localhost:8089/pidev/participantRequest?page=${pageNumber}&size=${pageSize}`;
    return this.http.get(apiUrl);
  }
 
  getStatusCounts(): Observable<any> {
    return this.http.get<any>(`${this.Url}/status/count`);
  }
  
  /*acceptParticipantRequest(idParticipantRequest: number) {
    return this.http.put(`http://localhost:8089/pidev/participantRequest/${idParticipantRequest}/accept`, null);
  }

  progresserDemande(idParticipantRequest: number): Observable<any> {
    return this.http.put(`${this.Url}/${idParticipantRequest}/progress`, {});
  }

  refuserDemande(idParticipantRequest: number): Observable<any> {
    return this.http.put(`${this.Url}/${idParticipantRequest}/refuse`, {});
  }*/


  acceptParticipantRequest(idParticipantRequest: number) {
    return this.http.put(`${this.Url}/${idParticipantRequest}/accept`, null);
  }

  refuseParticipantRequest(idParticipantRequest: number) {
    return this.http.put(`${this.Url}/${idParticipantRequest}/refuse`, null);
  }

  
  inProgressParticipantRequest(idParticipantRequest: number) {
    return this.http.put(`${this.Url}/${idParticipantRequest}/progress`, null);
  }


  sendEmail(email: string) {
    const url = `${this.Url}/sendEmailsimple`;
    return this.http.post(url, null, {
      params: { email }, // Passer l'email en tant que paramètre
      responseType: 'text'
    });
  }
  sendEmailStat(idParticipantRequest: number, email: string, status: Status): Observable<void> {
    return this.http.get<void>(`${this.Url}/${idParticipantRequest}/sendEmail?email=${email}&status=${status}`);
  }
  
  
  
}
