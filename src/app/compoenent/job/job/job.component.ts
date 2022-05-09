import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/Core/Model/Job';
import { JobService } from 'src/app/Core/Services/job.service';
import { ModalManager } from 'ngb-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Interview } from 'src/app/Core/Model/Interview';
import { InterviewService } from 'src/app/Core/Services/interview.service';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job:Job[]
  jo:Job
  interview:Interview
  tab:any=[]
  p:number=0;
  term: string;
  myForm: FormGroup;
  InterviewForm: FormGroup;
  submitted = false;
  id:number
  idJob:number;
  loading:boolean=false;
  constructor(private interviewService:InterviewService, private jobService:JobService,private modalService: NgbModal,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllJobs();
    this.jo=new Job();
    this.interview=new Interview();
    this.InterviewForm=new FormGroup({
      'DateEntretien':new FormControl("",Validators.required),
      'user':new FormControl("",Validators.required)

    })

    this.myForm= new FormGroup({
      'title':new FormControl(this.jo.title,Validators.required),
      'startDate':new FormControl(this.jo.startDate,Validators.required),
      'endDate':new FormControl(this.jo.endDate,Validators.required),
      'description':new FormControl(this.jo.description,Validators.required)

    })
    
  }
  deleteEvent(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.jobService.deleteJob(id).subscribe((res)=>{
          this.getAllJobs();
          this.toastr.success('Job deleted !','Delete Job');
        }),()=>this.toastr.error('Error !','Delete Job');
      }
    })
    
  }

  postuleForJob(id:number,content:any){
    
    this.idJob=id;
    this.open(content);

  }

  addInterview(){
    let data={
      DateEntretien:this.interview.DateEntretien
    }
    
    console.log(data)
    
    this.submitted = true;
    if (this.InterviewForm.invalid) {
     return;
    }

    this.interviewService.addInterview(this.interview.DateEntretien,this.idJob,this.interview.user).pipe(finalize(() => this.loading = false)).subscribe(res=>{
      this.toastr.success("Interview added successfuly an email has been sent to your email adress please verif that, thanks");
    }),()=>this.toastr.error("we have an error please try again later !!");
    
  }
  getJobByID(id:number){
    this.jobService.getJobById(id).subscribe(res=>{
      console.log(res)
      this.jo=res;
    })
  }
  getAllJobs(){
    this.jobService.data().subscribe(res=>{
      console.log(res)
      this.job=res;
      
    })
  }

  
  add(content:any){
    this.submitted = true;
    if (this.myForm.invalid) {
     return;
    }
    this.jobService.addJob(this.jo).subscribe((res)=>{
          this.toastr.success("Job added !");
          this.getAllJobs();
          this.close(content);
    }),()=>this.toastr.error('Error !!')
    ,()=>this.getAllJobs();
  }
  updateJob(id:number,content:any){
    this.id=id;
    this.getJobByID(id);
    console.log(this.jo)
    this.open(content);
  }
  updateJobSubmit(id:number,content:any){
    this.submitted = true;
    if (this.myForm.invalid) {
     return;
    }
    this.jobService.updateJob(id,this.jo).subscribe((res)=>{
      console.log("data updated");

    }),()=>console.log("error")
    
    this.close(content);
  }
close(content:any) {
    this.getAllJobs();
    this.modalService.dismissAll(content);
  }
open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res:any) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.getAllJobs();
      this.jo=new Job();
    });
  }

}
