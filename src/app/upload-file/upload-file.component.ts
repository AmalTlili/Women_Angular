import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'app/upload-file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
shortlink:string ="";
loading:boolean = false; //Flagvariable
file!:File;

  constructor(private fileservice:UploadFileService) { }

  ngOnInit(): void {
  }
onchange(event:any){
  this.file=event.target.files[0];
}
onupload(){
  this.loading=! this.loading;
  console.log(this.file);
  this.fileservice.upload(this.file).subscribe((event:any)=>{
 if(typeof (event)=='object'){
   this.shortlink = event.link;
   this.loading = false;

 }
  });
}
}
