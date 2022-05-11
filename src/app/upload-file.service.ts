import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)};

  baseUrl="https://file.io"
  constructor(private http:HttpClient) { }
  //Return as observable
  upload(file):Observable<any>{
    //create Form Data
    const formData = new FormData();
    formData.append("file",file,file.name);
    return this.http.post(this.baseUrl, formData,this.httpOptions)
  }
}
