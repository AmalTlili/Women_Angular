import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  modalRef?:BsModalRef;
  title:any;
  PresentDays: number=0;
  absentDays:number=0;
  events: any=[
    { title: 'Present', date: '2022-04-01',color:'#0000FF' },
    { title: 'Absent', date: '2022-04-02',color:'#0000FF' },
    { title: 'Present', date: '2022-04-03',color:'#FF0000' },
    { title: 'Present', date: '2022-05-01',color:'#0000FF' },
    { title: 'Absent', date: '2022-05-20',color:'#0000FF' },
    { title: 'Present', date: '2022-05-30',color:'#FF0000' }
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events:this.events,
    eventClick:this.handleDateClick.bind(this),
  };
  config={
    animated:true
  };
  @ViewChild('template') template!: string;
  start:any;
 
  constructor(private modalService:BsModalService ) { }

  ngOnInit(): void {
   
  }
  handleDateClick(arg:any){
    console.log(arg);
    console.log(arg.event._def.title);
    this.title=arg.event._def.title;
    this.start=arg.event.start;
    this.modalRef=this.modalService.show(this.template,this.config)
  }


}
