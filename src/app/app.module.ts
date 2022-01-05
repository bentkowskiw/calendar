import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TilesComponent } from './tiles/tiles.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamic } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsComponent } from './events/events.component';
import { ConfigStepperComponent } from './config-stepper/config-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    GridListDynamic,
    LoginComponent,
    PageNotFoundComponent,
    EventsComponent,
    ConfigStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, GridListDynamic, TilesComponent, MatGridListModule,MatStepperModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,FormsModule]
})
export class AppModule { }
