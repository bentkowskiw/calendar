import { Component, OnInit } from '@angular/core';
import { CalendarEvent, EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : CalendarEvent[]

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
   this.getEvents();
  }
  getEvents(){
    this.eventsService.getEvents().subscribe((d: any)=>{
      this.events = d;
    });
  }
  getEvent(ev:CalendarEvent){
    this.eventsService.getEvent(ev).subscribe(()=>{
      globalThis.resizeBy(2,2);
    });
  }
}
