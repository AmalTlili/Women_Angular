import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpEvent,HttpHeaders,HttpParams,HttpRequest   } from '@angular/common/http';
import { Job } from '../Model/Job';
import { JobFavori } from '../Model/JobFavori';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url=environment.hostUrl;
  job:Job=new Job();
  public curJob= new BehaviorSubject([this.job]);
  sharedJob = this.curJob.asObservable();
  constructor(private http:HttpClient) { }


  data():Observable<Job[]>{
   
    return this.http.get<Job[]>(this.url+"job/all")
  }

  addJob(data:Job){
    return this.http.post(this.url+"job/add",data)

  }
  deleteJob(id:number){
    return this.http.delete(this.url+"job/delete/"+id)
  }

  updateJob(id:number,data:Job){
    return this.http.put(this.url+"job/update/"+id,data)
  }

  getJobFavoriById(idjob:number){
    return this.http.get<JobFavori[]>(this.url+"job/favori/"+idjob)
  }


  getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(this.url+"job/"+id)
  }
}
