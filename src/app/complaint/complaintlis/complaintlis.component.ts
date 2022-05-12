import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'app/complaint.service';
import { Complaint } from 'app/modals/Complaint';

@Component({
  selector: 'app-complaintlis',
  templateUrl: './complaintlis.component.html',
  styleUrls: ['./complaintlis.component.scss']
})
export class ComplaintlisComponent implements OnInit {
  comptoupdate : Complaint ={ id :null,email:null,subject:null,description:null};

  complaint:Complaint= new Complaint

  listcomplaints : Complaint[];
  id :number;



  constructor(private complaintservice : ComplaintService , public route : Router ) { }

  ngOnInit(): void {
this.complaintservice.getallComplaints().subscribe((data)=>{this.listcomplaints=data;
console.log("list of complaints",this.listcomplaints)
})


  }


  supprimercontraint(id : number){
    this.complaintservice.deletecomplaint(id).subscribe(()=>this.complaintservice.getallComplaints().subscribe(res=>{this.listcomplaints=res}));

  }


  edit(id :number ,complaint : Complaint){

    this.complaintservice.updatecomplaint(id,complaint).subscribe(()=>this.complaintservice.getallComplaints().subscribe((res)=>{this.listcomplaints=res}));
    this.route.navigate(["/listcomplaint"]);

  }

  editcomp(id :number ,complaint : Complaint){
    console.log(id,complaint) ;
    this.comptoupdate = complaint ;
    console.log('jjj',this.comptoupdate)
  }
}
