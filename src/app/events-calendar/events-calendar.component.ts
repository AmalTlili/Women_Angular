import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.css']
})
export class EventsCalendarComponent implements OnInit {
  the_events = [];

  ngOnInit(): void {
    this.getEventList()
  }

  refresh_calendar(){

    this.calendarOptions =  {
      initialView: 'dayGridMonth',
      height: 450,
      dateClick: this.handleDateClick.bind(this), // bind is important!
      events: this.the_events,
    };
  }



  constructor(
     private _http:HttpClient ,private es:EventService
) { }

calendarOptions: CalendarOptions;

handleDateClick(arg) {
  alert('date click! ' + arg.dateStr)
}

getEventList(){

  this.es.getEvents().subscribe(res=>{

      res.forEach(element => {
        console.log(element.startDate);
        this.the_events.push(
          {title: element.topic, date: element.startDate}
        )
        
      });      
      console.log(this.the_events);
      this.refresh_calendar();
    })
 }

}  

