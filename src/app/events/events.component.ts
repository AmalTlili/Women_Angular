import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'app/event.service';
import { Events } from 'app/modals/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Events;
  events_tmp: Events;
  list : Events[];
  form : boolean = false;
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



   deleteEvent(id){
     console.log(id);
  //   let conf=confirm("etes_vous sur ?");
  //   if (conf)
      this.es.deleteEvent(id).subscribe(()=>{
        console.log("MoneyPot supprimé");
    //    window.location.reload();
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
    }  

   
    
  
 
 



 
 

