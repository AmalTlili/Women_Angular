import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from './modals/Complaint';





@Injectable({
  providedIn: 'root'
})
export class ComplaintService {


  addComplaintUrl="http://localhost:8081/addComplaint"
  getallcomplainturl="http://localhost:8081/getComplaints"
  deletbyid="http://localhost:8081/deleteComplaint"
  updatecomplaintUrl="http://localhost:8081/updateComplaint/"



  constructor(private Complainthttp : HttpClient) { }




  addComplaint(complaint : Complaint){
    return this.Complainthttp.post<Complaint>(this.addComplaintUrl, complaint )
  }

  getallComplaints():Observable<Complaint[]>{
    return this.Complainthttp.get<Complaint[]>(this.getallcomplainturl);
}


deletecomplaint(id : number){
  return this.Complainthttp.delete("http://localhost:8081/deleteComplaint/"+id)
}


updatecomplaint(id :number, complaint :Complaint):Observable<Complaint>{

return this.Complainthttp.put<Complaint>(this.updatecomplaintUrl + id,complaint)

}
}
