import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { CalendarList } from './calendar-api';
import { User } from './user-api';





@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  calendarEvents: Observable<Response> = {} as Observable<Response>

  constructor(private client: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get()
  doAutoLogin(s: loginSubscriber) {

    this.client
      .post<Response>(environment.gateway + '/autologin/', '', { withCredentials: true, observe: 'body', responseType: 'json' })
      .subscribe(r => {
        s.authenticate(r.message.token, r.message.user);
      })

  }

  // HttpClient API get()
  doLogout(s: logoutSubscriber) {
    this.client
      .delete<Response>(environment.gateway + '/autologin/', { withCredentials: true, observe: 'body', responseType: 'json' })
      .subscribe(r => {
        s.deauthenticate();
      })

  }

  // HttpClient API get()
  doDeauthorize(s: logoutSubscriber) {
    this.client
      .delete<Response>(environment.gateway + '/oauth/', { withCredentials: true, observe: 'body', responseType: 'json' })
      .subscribe(r => {
        s.deauthenticate();
      })

  }

  doCalendars(s: calendarSubscriber): void {
    this.client.get<Response>(environment.gateway + '/api/calendars/').subscribe(
      (r => {
        s.calendars = r.message as any as CalendarList
      })
    );
  }





  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error('err'));
  }
}

interface Response {
  message: any
  code: number
  error: string
}


export interface loginSubscriber {
  authenticate(token: string, user: User): void;
}

export interface logoutSubscriber {
  deauthenticate(): void;
}


export interface calendarSubscriber {
  calendars: CalendarList
}

