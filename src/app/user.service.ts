
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modals/User';
import { Smsrequest } from './modals/smsrequest';
import { Notification } from './modals/notification';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[]; 
  listt: Smsrequest[];
  listn: Notification[];

  
  httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)};
  private deleteURL = "http://localhost:8081/user/DeleteUser";
  

  constructor(private _http:HttpClient) {
  

  }

  getUserList():Observable<User[]>{
 
  
  return this._http.get<User[]>('http://localhost:8081/user/Afficheruser',this.httpOptions);
  
}
adduser(user):Observable<any>{
  return this._http.post( "http://localhost:8081/user/Adduser",user,this.httpOptions);
}
deleteuser(iduser: number): Observable<Object>{
  return this._http.delete(`${this.deleteURL}/${iduser}`,this.httpOptions);
}
smsuser(smsrequest):Observable<any>{
  return this._http.post( "http://localhost:8081/api/v1/sms",smsrequest,this.httpOptions);
}
notificationuser(notification):Observable<any>{
  return this._http.post( "http://localhost:8081/notification/token",notification,this.httpOptions);
}

getUsernamebyyear():Observable<User[]>{
 
  
  return this._http.get<User[]>("http://localhost:8081/user/getusernamenumberbyyear",this.httpOptions);
  
}





  
}
