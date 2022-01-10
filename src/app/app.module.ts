import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigStepperComponent } from './config-stepper/config-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ConfigStepperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    JwtModule.forRoot({
      config: {
        headerName: 'Authorization',
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('accessToken');
        },
        allowedDomains: [environment.gateway],
        disallowedRoutes: [environment.gateway + '/login/']
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent, MatGridListModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButtonModule,MatOptionModule,MatSelectModule]
})
export class AppModule { }

export interface Response {
  status: number,
  message: string
}
    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   const queryString = Object.entries(params)
    //     .map(entry => entry.join('='))
    //     .join('&');
    //   if (queryString) {
    //     this.url += `?${queryString}`;
    //   }
    // });