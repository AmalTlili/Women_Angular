import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './modals/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  

  list: Events[]; 
 
  baseUrl:string='http://localhost:8081/';
  
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http:HttpClient) {
  

  }


 

  getEvents():Observable<Events[]>{
    console.log("22");
    
    return this._http.get<Events[]>(this.baseUrl+"retrieveallevents");
    
  }
  
  updateEvent(Events):Observable<any>{
    return this._http.put(this.baseUrl + "modifyEvent",Events);
  }

   addEvent(Events):Observable<any>{
     return this._http.post(this.baseUrl + "Ajouter",Events);
   }

   deleteEvent(id:number):Observable<any>{
   return this._http.delete(this.baseUrl + "/removeEvent/" + id)
  }

}