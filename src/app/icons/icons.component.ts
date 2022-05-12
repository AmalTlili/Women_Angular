import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ComplaintService } from 'app/complaint.service';
import { Complaint } from 'app/modals/Complaint';
import { Router } from "@angular/router";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  complaint:Complaint= new Complaint;
  router: Router;


  constructor(private complaitservice : ComplaintService, public route :Router) { }

  ngOnInit() {
  }


  ajoutercomplaint(){
    this.complaitservice.addComplaint(this.complaint).subscribe(res=>{console.log(res); });
console.log("complaint object",this.complaint);
this.route.navigate(["/listcomplaint"]);
  }
}
