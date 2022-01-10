import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { RestApiService } from '../shared/rest-api.service';
import { CalendarList,CalendarListEntry } from '../shared/rest-api.service';




/**
 * @title Stepper responsive
 */
 @Component({
  selector: 'app-config-stepper',
  templateUrl: './config-stepper.component.html',
  styleUrls: ['./config-stepper.component.css']
})
export class ConfigStepperComponent implements OnInit {

   calendars:CalendarList
  selectedCalendar:CalendarListEntry

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private api:RestApiService ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
     this.api.calendars(this);
  }

  changeFirst() {
    let ctrl1 = this.firstFormGroup;
    let ctrl2 = ctrl1.get('firstCtrl');
    if (ctrl2){
      ctrl2.setValue(this.calendars)

    }
  }

 

}
