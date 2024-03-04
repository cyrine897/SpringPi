import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PackService {
  readonly API_URL ='http://localhost:8089/pidev/pack';


  constructor(private httpClient:HttpClient) { }
    getAllPacks():Observable<any>
    { return this.httpClient.get(`${this.API_URL}/getAllPack`)
  }
    addPack(pack : any):Observable<any> {
      return this.httpClient.post(`${this.API_URL}/addPack`, pack)
    }
    editPack(pack : any):Observable<any>{
      return this.httpClient.put(`${this.API_URL}/UpdatePack`, pack)
    }
    retrivePack(idPack : any):Observable<any>{
      return  this.httpClient.get(`${this.API_URL}/retrivePack/${idPack}`)
    }
    deletePack(idPack : any):Observable<any>{
      return  this.httpClient.delete(`${this.API_URL}/removePack/${idPack}`)
    }
  

  

}