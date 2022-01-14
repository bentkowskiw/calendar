import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestApiService } from '../shared/rest-api.service';
import { CalendarList, CalendarListEntry } from '../shared/calendar-api';


class notification {
  key: string
  value: string

  constructor(key: string, value: string) {
    this.key = key
    this.value = value
  }
}

/**
 * @title Stepper responsive
 */
@Component({
  selector: 'app-config-stepper',
  templateUrl: './config-stepper.component.html',
  styleUrls: ['./config-stepper.component.css']
})
export class ConfigStepperComponent implements OnInit {


  selectedCalendar: CalendarListEntry = {} as CalendarListEntry
  selectedNotification: notification = {} as notification

  calendars: CalendarList = {} as CalendarList
  notifications: notification[] 


  firstFormGroup = this._formBuilder.group({
    calendarsCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    notificationCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    senderCtrl: ['', Validators.required],
  });
  submitFormGroup = this._formBuilder.group({
    submitCtrl: ['',],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private api: RestApiService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.notifications= [
      new notification("5m", "5 minutes before"),
      new notification("15m", "15 minutes before"),
      new notification("30m", "30 minutes before"),
      new notification("1h", "1 hour before"),
      new notification("2h", "2 hours before"),
      new notification("3h", "3 hours before"),
      new notification("6h", "6 hours before"),
      new notification("12h", "12 hours before"),
      new notification("1d", "1 day before"),
    ]
  }

  ngOnInit(): void {
    this.api.doCalendars(this)
  }

  submit() { }

}


