import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'app/complaint.service';
import { Complaint } from 'app/modals/Complaint';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  complaint:Complaint= new Complaint;


  constructor(private complaitservice : ComplaintService) { }

  ngOnInit() {
  }


  ajoutercomplaint(){
    this.complaitservice.addComplaint(this.complaint).subscribe(res=>{console.log(res); });
console.log("complaint object",this.complaint)
  }
}
