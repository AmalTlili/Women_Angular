import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../models/Training.model';
const baseUrl = 'http://localhost:8081/women/Training';
@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {
  constructor(private httpClient: HttpClient) { }

    getTrainings(): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}/getTrainings`);
  }
    get(id: any): Observable<Training> {
        // @ts-ignore
        return this.httpClient.get(`${baseUrl}/getTraining/${id}`);
    }

    create(data: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/add`, data);
    }

    update(id: any, data: any): Observable<any> {
        return this.httpClient.put(`${baseUrl}/update/${id}`, data);
    }
    assignFormerToTrainer(userId: any, trainingId: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/assignatrainer/${userId}/${trainingId}`, null);
    }
    assignUserToTrainer(userId: any, trainingId: any): Observable<any> {
        return this.httpClient.post(`${baseUrl}/assignauser/${userId}/${trainingId}`, null);
    }
    delete(id: any): Observable<any> {
        return this.httpClient.delete(`${baseUrl}/remove/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.httpClient.delete(baseUrl);
    }

    findByTitle(title: any): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}?title=${title}`);
    }
    search(domain: any, startDate: any, endDate: any): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${baseUrl}/search/${domain}/${startDate}/${endDate}`);
    }
}
