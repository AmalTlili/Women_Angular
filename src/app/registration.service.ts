import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modals/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(user:User):Observable<any>{
return this._http.post<any>("http://localhost:8081/user/login",user)
  }
}
