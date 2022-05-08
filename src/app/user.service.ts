
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modals/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
GetURL = "http://localhost:8081/user/getusernamenumberbyyear";
  constructor(private _http:HttpClient) { }
getuserbyyear():Observable<User[]>{
  return this._http.get<User[]>('${this.GetURL]')
}

  
}
