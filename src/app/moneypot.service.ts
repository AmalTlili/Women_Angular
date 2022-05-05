import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoneyPot } from './modals/moneypot';
@Injectable({
  providedIn: 'root'

})
export class MoneypotService {


  list: MoneyPot[]; 
 
  baseUrl:string='http://localhost:8081/';
  
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http:HttpClient) {
  

  }


 

  getMoneyPotList():Observable<MoneyPot[]>{
    console.log("22");
    
    return this._http.get<MoneyPot[]>(this.baseUrl+"retrieveallpots");
    
  }
  
  updateMoneyPot(moneypot):Observable<any>{
    return this._http.put(this.baseUrl + "modifyMoneyPot",moneypot);
  }

   addMoneyPot(moneypot):Observable<any>{
     return this._http.post(this.baseUrl + "AjouterM",moneypot);
   }

   deleteMoneyPot(idM:number):Observable<any>{
   return this._http.delete(this.baseUrl + "/removeMoneyPot/" + idM)
  }

}