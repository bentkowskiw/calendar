import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthTokens } from './auth.service'
import { RestApiService, loginSubscriber, logoutSubscriber } from './shared/rest-api.service';
import { User } from './shared/user-api';




@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  user: User = {} as User

  constructor(private router: Router, private auth: AuthService, private api: RestApiService) { }

  ngOnInit(): void {

  }


  autoLogin(): void {

    let sub = new subscriber(this.auth, this.router, this)
    this.api.doAutoLogin(sub);

  }

  authorize() {
    window.open("http://localhost:8080/login/", "_self")
  }

  // deauthorize calls deathorize on REST and calls callbuck function logout
  deauthorize() {
    const d: logoutSubscriber = {
      deauthenticate:()=>{
        this.doLogout()
      }
    }
    this.api.doDeauthorize(d)
  }

  logout(){
    const d: logoutSubscriber = {
      deauthenticate:()=>{
        this.doLogout()
      }
    }
    this.api.doLogout(d)  
  }

  // logout cleans up login tokens and goes to login screen
  private doLogout() {
    this.auth.logout()
    this.user={}as User
    this.router.navigate(['login'])
  }

  isAuthorized(): boolean {
    return this.auth.isAuthenticated()
  }

}

interface userSubscriber {
  user: User
}

interface logouter {
  logout:()=>void;
}


class subscriber implements loginSubscriber {

  constructor(private auth: AuthService, private router: Router, private userSub: userSubscriber) { }

  authenticate(token: string, user: User) {
    let success = this.auth.authenticate(token);
    this.userSub.user = user;
    if (success) {
      this.router.navigate(['stepper'])
    }
  }

}


