import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  @ViewChild('content',{static:false}) el!:ElementRef;

  makepdf(){
    let pdf= new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
     callback:(pdf)=>{
       pdf.save("User.pdf");
     }
    });
    pdf.save();
  }
  uploadfile(){
    this._router.navigate(['/upload']);
  }

}
