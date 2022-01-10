import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, AuthTokens } from './auth.service'
import { RestApiService } from './shared/rest-api.service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private auth: AuthService,private api:RestApiService) { }


  doLogin() {
    let value
    this.getCookie('auth');
    this.activeRoute.queryParams.subscribe(params => {
      if (!params) {
        return
      }
       value = params['tokens']
      if (value) {
        value = decodeURIComponent(value)
        
      }
    });
    // let tokStr = this.api.login()

    if (value) {
      let tokens = JSON.parse(value)
      if (this.auth.authenticate(tokens)) {
        this.router.navigate(['stepper'])
      }
    }

  }
  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let cookieName = name + "=";
    let c: string;

    for (let i: number = 0; i < ca.length; i += 1) {
      if (ca[i].indexOf(name, 0) > -1) {
        c = ca[i].substring(cookieName.length + 1, ca[i].length);
        console.log("valore cookie: " + c);
        return c;
      }
    }
    return "";
  }
}
