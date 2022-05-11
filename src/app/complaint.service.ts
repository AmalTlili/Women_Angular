import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from './modals/Complaint';





@Injectable({
  providedIn: 'root'
})
export class ComplaintService {


  ComplaintUrl="http://localhost:8081/addComplaint"


  constructor(private Complainthttp : HttpClient) { }




  addComplaint(complaint : Complaint){
    return this.Complainthttp.post<Complaint>(this.ComplaintUrl, complaint )
  }
}
