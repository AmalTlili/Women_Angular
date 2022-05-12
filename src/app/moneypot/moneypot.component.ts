import { Component, OnInit , EventEmitter, Output} from '@angular/core';


import { MoneypotService } from 'app/moneypot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MoneyPot } from 'app/modals/moneypot';
import { content } from 'googleapis/build/src/apis/content';

//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { event } from 'jquery';
// import swal from 'sweetalert';


@Component({
  selector: 'app-moneypot',
  templateUrl: './moneypot.component.html',
  styleUrls: ['./moneypot.component.css']
})


export class MoneypotComponent implements OnInit {
  moneypot: MoneyPot;
  list : MoneyPot[];
  form : boolean = false;
  duration: any;
  closeResult! : string;
  bankDetails: string = '';
  
  filtered_list: MoneyPot[];
  constructor(private ms: MoneypotService, private modalService: NgbModal , private http :HttpClient){}

  totalLength:any;
  page:number = 1;
  ngOnInit(): void {  
    this.getMoneyPotList()

  }



getMoneyPotList(){
  this.ms.getMoneyPotList().subscribe(res=>{
  this.list=res;
  this.filtered_list = this.list;
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
    console.log( moneypot);
    
   this.ms.addMoneyPot(moneypot).subscribe(data=>{
     console.log("result is " + data);
     
     this.getMoneyPotList();
   });
  }

  updateMoneyPot(moneypot){
    this.ms.updateMoneyPot(moneypot).subscribe(data=>{
      console.log(moneypot);
      
      console.log("result is ")
      console.log(data)
      
      this.getMoneyPotList();
    });
   }



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


  // openSweetalert(idM:number){
  //   swal({
  //        title: "vous êtes sûr ?",
  //        text: "Une fois supprimée , Vous ne pouvez pas recuperer le Stock!",
  //        icon: "warning",
  //        buttons: ["annuler", "Confirmer"],
  //        dangerMode: true,
  //       })
  //         .then((willDelete) => {
   
  //          if (willDelete) {
  //           this.ms.deleteMoneyPot(idM).subscribe();
  //            //this.stocks.splice(j,1);
  //            //window.location.reload();
  //           swal("Le MoneyPot a été supprimé!", {
  //               icon: "success", 
              
  //             }).then(function(isConfirm) {
  //               if (isConfirm) {
  //                 location.reload();
  //               } 
  //             //  timer: 999999999999999999999999999999999999999, 
  //             });
             
  //           } else {
  //            swal("MoneyPot!");
  //           }
           
  //        });
   
  //     }

    
      Search(){


        console.log(this.bankDetails.toLocaleString());
      
          this.filtered_list = this.list.filter(res =>{
          
            return res.bankDetails.toLocaleString().match(this.bankDetails.toLocaleString());
          })
        
        console.log('----');
        console.log(this.list);
        
 
      }
  
      key:string='idM';
      reverse:boolean =false;
      sort(key){
      this.key= key;
      this.reverse = !this.reverse;
      }
    }  

   
    
  
 
 



 
 

