import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get(environment.gateway + '/api/events');
  }

  getEvent(event: CalendarEvent){
    return this.httpClient.get(environment.gateway + '/api/event/'+event.id);
  }
}

export class CalendarEvent {
  id: string;
  message: string;
  complete: boolean;
}
