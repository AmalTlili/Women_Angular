import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)};

  constructor(private http: HttpClient) {
  }

  upload(file: File, id: number): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    // @ts-ignore
    const req = new HttpRequest('POST', `http://localhost:8081/women/Training/upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.post(`http://localhost:8081/women/Training/upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)});
    //return this.http.request(req, this.httpOptions);
  }
}
