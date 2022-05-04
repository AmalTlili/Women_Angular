import { Component, OnInit } from '@angular/core';
import { Job } from 'app/core/Model/Job';
import { JobService } from 'app/core/Services/job.service';



@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job:Job[]
  tab:any=[]
  test:String="heeloooo"
  constructor(private jobService:JobService) { }

  ngOnInit() {
    this.jobService.data().subscribe(res=>{
      
      this.tab=res;
      console.log(this.tab)
    })
  }
  counter(i: number) {
    return new Array(i);
}
  getAllJobs(){
    this.jobService.data().subscribe(res=>{
      console.log(res)
      this.tab=res;
    })
  }

}
