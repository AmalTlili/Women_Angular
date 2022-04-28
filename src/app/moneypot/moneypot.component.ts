import { Component, OnInit , EventEmitter, Output} from '@angular/core';


import { MoneypotService } from 'app/moneypot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MoneyPot } from 'app/modals/moneypot';
import { content } from 'googleapis/build/src/apis/content';
//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-moneypot',
  templateUrl: './moneypot.component.html',
  styleUrls: ['./moneypot.component.css']
})
export class MoneypotComponent implements OnInit {
  moneypot: MoneyPot;
  list : MoneyPot[];
  form : boolean = false;
  
  closeResult! : string;
 
  constructor(private ms: MoneypotService, private modalService: NgbModal){}
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {  
    this.getMoneyPotList()

  }
getMoneyPotList(){
  this.ms.getMoneyPotList().subscribe(res=>{
  this.list=res;
  console.log(res);
  this.totalLength = res.length;
  });
}

onSubmit(f: NgForm) {
  console.log(f.value);
  this.addMoneyPot(f.value);
  this.modalService.dismissAll();
  this.getMoneyPotList();
}

onSubmitEdit(f: NgForm) {
  console.log(f.value);
  this.updateMoneyPot(f.value);
  this.modalService.dismissAll();
  this.getMoneyPotList();
}
// Modal methods
open(content, u=null) {
  if (u != null) {
    this.moneypot = u;
    console.log(this.moneypot);
    
  }
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    console.log(content);
    
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

  addMoneyPot(moneypot){
   this.ms.addMoneyPot(moneypot).subscribe(data=>{
     console.log("result is " + data);
     
     this.getMoneyPotList();
   });
  }

  updateMoneyPot(moneypot){
    this.ms.updateMoneyPot(moneypot).subscribe(data=>{
      console.log("result is " + data);
      
      this.getMoneyPotList();
    });
   }

//  }
// passAjout(){
//   this.router.navigate(['client/ajoutclient']);
// }

//  editMoneyPot(moneypot : MoneyPot){
//    this.ms.editMoneyPot(moneypot).subscribe();
 
//  }

  // cancel(){
  //   this.form =false;
  // }

   deleteMoneyPot(idM){
     console.log(idM);
  //   let conf=confirm("etes_vous sur ?");
  //   if (conf)
      this.ms.deleteMoneyPot(idM).subscribe(()=>{
        console.log("MoneyPot supprimé");
    //    window.location.reload();
    this.getMoneyPotList()
      });
      }

    // open(id:number) {
    //   this.ms.open(id, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }
  
    // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return `with: ${reason}`;
    //   }
    // }


   
    
  }
 
 


//  openSweetalert(idM: number){
//    console.log(idM);


//    this.getMoneyPotList()
   
 
 

