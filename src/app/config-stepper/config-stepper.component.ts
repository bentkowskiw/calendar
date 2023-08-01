import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestApiService, userConfiger } from '../shared/rest-api.service';
import { CalendarList, CalendarListEntry } from '../shared/calendar-api';
import { NotificationMessage, UserConfig } from '../shared/user-config';


class country {
  key: string
  value: string

  constructor(key: string, value: string) {
    this.key = key
    this.value = value
  }
}
class advance {
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
  selectedAdvance: advance = {} as advance
  selectedCountry: country = {} as country

  calendars: CalendarList = {} as CalendarList
  advances: advance[]
  countries: country[]



  firstFormGroup = this._formBuilder.group({
    calendarsCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    advanceCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    senderCtrl: ['', Validators.required],
    messageCtrl: ['', Validators.required],
  });
  submitFormGroup = this._formBuilder.group({
    countryCtrl: ['', Validators.required],
    submitCtrl: ['',],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private api: RestApiService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.advances = [
      new advance("5m", "5 minutes before"),
      new advance("15m", "15 minutes before"),
      new advance("30m", "30 minutes before"),
      new advance("1h", "1 hour before"),
      new advance("2h", "2 hours before"),
      new advance("3h", "3 hours before"),
      new advance("6h", "6 hours before"),
      new advance("12h", "12 hours before"),
      new advance("1d", "1 day before"),
    ]

    this.countries = [
      new country("pl", "Polska"),
    ]

  }



  ngOnInit(): void {
    this.api.doCalendars(this)
  }

  subscribe() {

    const conf = {
      done: function (): void { alert("done") },
      config: {
        calendarID: this.selectedCalendar.id,
        message: {
          sender: this.thirdFormGroup.get("senderCtrl")?.value,
          content: this.thirdFormGroup.get("messageCtrl")?.value,
        } as NotificationMessage,
        country: this.selectedCountry.key,
        advance: this.selectedAdvance.key,
      } as UserConfig,
    } as userConfiger

    this.api.doSubscribe(conf)
  }

}


