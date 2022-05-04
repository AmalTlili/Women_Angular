import { Injectable } from '@angular/core';
import { environment } from 'environments/environment'; 
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpEvent,HttpHeaders,HttpParams,HttpRequest   } from '@angular/common/http';
import { Job } from '../Model/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url=environment.hostUrl;
  job:Job=new Job();
  public curJob= new BehaviorSubject([this.job]);
  sharedJob = this.curJob.asObservable();
  constructor(private http:HttpClient) { }


  data(){
    return this.http.get(this.url+"job/all")
  }



}
