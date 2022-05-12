import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpEvent,HttpHeaders,HttpParams,HttpRequest   } from '@angular/common/http';
import { Interview } from '../Model/Interview';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  url=environment.hostUrl;
  interviw:Interview=new Interview();
  public curinterviw= new BehaviorSubject([this.interviw]);
  sharedinterviw = this.curinterviw.asObservable();
  constructor(private http:HttpClient) { }





  addInterview(data:any,idJob:number,idUser:number){
    return this.http.post(this.url+"interview/add/"+idJob+"/"+idUser+"/"+data,{responseType: 'text'})

  }
}
