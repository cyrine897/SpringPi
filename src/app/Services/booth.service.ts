import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booth } from '../models/booth';

@Injectable({
  providedIn: 'root'
})
export class BoothService {
  readonly API_URL ='http://localhost:8089/pidev/booth';

  constructor(private httpClient:HttpClient) { }
  getAllBooths():Observable<any>
    { return this.httpClient.get(`${this.API_URL}/getAllBooths`)
  }
    addBooth(booth : any):Observable<any> {
      return this.httpClient.post(`${this.API_URL}/addBooth`, booth)
    }
    editBooth(booth : any):Observable<any>{
      return this.httpClient.put(`${this.API_URL}/UpdateBooth`, booth)
    }
    retriveBooth(idBooth : any):Observable<any>{
      return  this.httpClient.get(`${this.API_URL}/retriveBooth/${idBooth}`)
    }
    deleteBooth(idBooth : any):Observable<any>{
      return  this.httpClient.delete(`${this.API_URL}/removeBooth/${idBooth}`)
    }
  
    afficherListBoothWithPackId(idPack:any):Observable<any>{
      return this.httpClient.get(`${this.API_URL}/afficherListBoothWithPackId/${idPack}`)
    }
    ajouterBoothEtAffecterAPack(idPack:any,booth:Booth):Observable<any>{
      console.log(idPack);
      return this.httpClient.post(this.API_URL+'/ajouterBoothEtAffecterAPack/'+idPack,booth)

    }
}