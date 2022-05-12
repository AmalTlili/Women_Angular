import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Certificate} from '../models/Certifficate.model';

const baseUrl = 'http://localhost:8081/women/Certificate';
@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {
  httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)};

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(`${baseUrl}/getCertificates`, this.httpOptions);
  }
  get(id: any): Observable<Certificate> {
    // @ts-ignore
    return this.httpClient.get(`${baseUrl}/getCertificate/${id}`,this.httpOptions);
  }
  VerifyCertificate(QR: any): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${baseUrl}/verify/${QR}`, {responseType: 'text'}, this.httpOptions);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/add`, data, this.httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/update/${id}`, data, this.httpOptions);
  }
  GenerateCertificateForUser(userId: any, trainingId: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/create/${userId}/${trainingId}`, null, this.httpOptions);
  }
  GenerateCertificateForUsers(trainingId: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/create/${trainingId}`, null, this.httpOptions);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/removeCertificates/${id}`, this.httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl, this.httpOptions);
  }

  findByTitle(title: any): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(`${baseUrl}?title=${title}`);
  }
}
