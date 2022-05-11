import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../models/Training.model';
const baseUrl = 'http://localhost:8081/women/Training';
@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {
    httpOptions = { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiZmFyd2ExIiwiaXNzIjoiR2V0IEFycmF5cywgTExDIiwiZXhwIjoxNjUyNDMyNDE5LCJpYXQiOjE2NTIwMDA0MTksImF1dGhvcml0aWVzIjpbInVzZXI6cmVhZCIsInVzZXI6Y3JlYXRlIiwidXNlcjp1cGRhdGUiLCJ1c2VyOmRlbGV0ZSJdfQ.1cBZ-El79IjkoUTSbye8idcd1e4Rb_F6fg_PzBb84eQ8JAwvkbXdLRaNT3UfrV3VkhVdpRaBxUZ8bwY3i8yc1A"}`)};

    constructor(private httpClient: HttpClient) { }

    getTrainings(): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}/getTrainings`, this.httpOptions);
  }
    get(id: any): Observable<Training> {
        // @ts-ignore
        return this.httpClient.get(`${baseUrl}/getTraining/${id}`, this.httpOptions);
    }

    create(data: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/add`, data, this.httpOptions);
    }

    update(id: any, data: any): Observable<any> {
        return this.httpClient.put(`${baseUrl}/update/${id}`, data, this.httpOptions);
    }
    assignFormerToTrainer(userId: any, trainingId: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/assignatrainer/${userId}/${trainingId}`, null, this.httpOptions);
    }
    assignUserToTrainer(userId: any, trainingId: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/assignauser/${userId}/${trainingId}`, null, this.httpOptions);
    }
    delete(id: any): Observable<any> {
        return this.httpClient.delete(`${baseUrl}/remove/${id}`, this.httpOptions);
    }

    deleteAll(): Observable<any> {
        return this.httpClient.delete(baseUrl);
    }

    findByTitle(title: any): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}?title=${title}`, this.httpOptions);
    }
    search(domain: any, startDate: any, endDate: any): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}/search/${domain}/${startDate}/${endDate}`, this.httpOptions);
    }
}
