
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modals/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[]; 

  
  httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNTI4ODc3LCJpYXQiOjE2NTIwOTY4NzcsImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.Q1FA9XDOS-G4PHaVgqh4KEkCO8_oPdXSPRkc5GE-aDpRwXDX9LjxaTckLhVkmKAxGcf9KhtNvbiJShk9jDdewQ"}`)};
  private deleteURL = "http://localhost:8081/user/DeleteUser";
  

  constructor(private _http:HttpClient) {
  

  }

  getUserList():Observable<User[]>{
 
  
  return this._http.get<User[]>("http://localhost:8081/user/Afficheruser",this.httpOptions);
  
}
adduser(user):Observable<any>{
  return this._http.post( "http://localhost:8081/user/Adduser",user,this.httpOptions);
}
deleteuser(iduser: number): Observable<Object>{
  return this._http.delete(`${this.deleteURL}/${iduser}`,this.httpOptions);
}


  
}
