import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpEvent} from '@angular/common/http';
import {Certificate} from '../models/Certifficate.model';

const baseUrl = 'http://localhost:8081/women/Certificate';
@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(`${baseUrl}/getCertificates`);
  }
  get(id: any): Observable<Certificate> {
    // @ts-ignore
    return this.httpClient.get(`${baseUrl}/getCertificate/${id}`);
  }
  VerifyCertificate(QR: any): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${baseUrl}/verify/${QR}`, {responseType: 'text'});
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/add`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/update/${id}`, data);
  }
  GenerateCertificateForUser(userId: any, trainingId: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/create/${userId}/${trainingId}`, null);
  }
  GenerateCertificateForUsers(trainingId: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/create/${trainingId}`, null);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/removeCertificates/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Certificate[]> {
    return this.httpClient.get<Certificate[]>(`${baseUrl}?title=${title}`);
  }
}
