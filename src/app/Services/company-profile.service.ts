import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyProfile } from '../models/companyProfile';
@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {
  private apiUrl = 'http://localhost:8089/pidev/companyProfile'; 

  constructor(private http: HttpClient) { }
  retrieveCompanyProfile(userId: number): Observable<CompanyProfile> {
    return this.http.get<CompanyProfile>(`${this.apiUrl}/getProfile/${userId}`);
  }

  retrieveCompanyProfiles(): Observable<any>{
    return this.http.get(`${this.apiUrl}/profiles`);
  
  }

  addCompanyProfile(companyProfile: CompanyProfile): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, companyProfile);
  }

  updateCompanyProfile(companyProfile: CompanyProfile): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, companyProfile);
  }

  addAffectCompanyProfile(userId: number, companyProfile: CompanyProfile): Observable<CompanyProfile> {
    return this.http.post<CompanyProfile>(`${this.apiUrl}/addAffectCompanyProfile/${userId}`, companyProfile);
  }

  searchCompanyProfiles(companyName: string): Observable<CompanyProfile[]> {
    return this.http.get<CompanyProfile[]>(`${this.apiUrl}/search?companyName=${companyName}`);

  }

  uploadCompanyProfileImage(id: number ,imageFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', imageFile);
    return this.http.post(`${this.apiUrl}/uploadImage/`+id, formData);
  }

}


  

  
