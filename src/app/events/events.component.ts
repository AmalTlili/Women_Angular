import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'app/event.service';
import { Events } from 'app/modals/events';
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  ableToAddEvent: boolean = false;
  @ViewChild('content') content:ElementRef;  

  events: Events;
  events_tmp: Events;
  list : Events[];
  form : boolean = false;
  show_qr_code : boolean = true;
  // duration: any;
  closeResult! : string;
   location: string = '';
  
  filtered_list: Events[];
  constructor(private es: EventService, private modalService: NgbModal){}
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {  
    this.getEventList()

  }
  receiver(receivedFromChild:string){
    console.log("from events "+ receivedFromChild)
    if(receivedFromChild.endsWith("women.com")){
      this.ableToAddEvent = true;
    }else{
      this.ableToAddEvent = false;
    }
  }

  getEventList(){
  this.es.getEvents().subscribe(res=>{
  this.list=res;
  this.filtered_list = this.list;
  console.log("-----------------");
  
  console.log(res);
  this.totalLength = res.length;
  });
}

onSubmit(f: NgForm) {
  this.events_tmp =  f.value;
  console.log("-----");
  console.log(this.events_tmp);
  this.addEvent(f.value);
  this.modalService.dismissAll();
  this.getEventList();
}

onSubmitEdit(f: NgForm) {
  this.events_tmp =  f.value;
  console.log("-----");
  console.log(this.events_tmp);
  this.updateEvent(f.value);
  this.modalService.dismissAll();
  this.getEventList();
}
// Modal methods
open(content, u=null) {
  if (u != null) {
    this.events = u;
    console.log(this.events);
    
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

  addEvent(event){
    console.log( event);
    
   this.es.addEvent(event).subscribe(data=>{
     console.log("result is " + data);
     
     this.getEventList();
   });
  }

  updateEvent(moneypot){
    this.es.updateEvent(moneypot).subscribe(data=>{
      console.log("result is " + data);
      
      this.getEventList();
    });
   }

   showqr1(){
    this.show_qr_code = !this.show_qr_code
   }

   deleteEvent(id){
     console.log(id);
    // let conf=confirm("etes_vous sur ?");
    // if (conf)
      this.es.deleteEvent(id).subscribe(()=>{
        console.log("MoneyPot supprimé");
      //  window.location.reload();
    this.getEventList()
      });
      }

    
      Search(){
        console.log(this.list);


        console.log(this.location.toLocaleString());
      
          this.filtered_list = this.list.filter(res =>{
          
            return res.location.toLocaleString().toLowerCase().match(this.location.toLocaleString().toLowerCase());
          })
        
        console.log('----');
        console.log(this.list);
        console.log(this.filtered_list);
        
        
 
      }
  
      key:string='id';
      reverse:boolean =false;
      sort(key){
      this.key= key;
      this.reverse = !this.reverse;
      }


     


      export_to_pdf(){
        const source = document.getElementById("content");
        html2canvas(source).then((canvas) => {
          console.log(canvas)
          var imgData = canvas.toDataURL('image/png')
          var doc = new jspdf()
          var imgHeight = canvas.height * 208 / canvas.width;
          doc.addImage(imgData, 0, 0, 208, imgHeight)
          doc.save("export.pdf")
        })       
      }
    }  

   
    
  
 
 



 
 

