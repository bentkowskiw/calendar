import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthTokens } from './auth.service'
import { RestApiService, loginSubscriber } from './shared/rest-api.service';
import { User } from './shared/user-api';




@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  user: User = {} as User

  constructor(private router: Router, private auth: AuthService, private api: RestApiService) { }

  ngOnInit(): void {

  }


  autoLogin(userSub: userSubscriber): void {

    let sub = new subscriber(this.auth, this.router, userSub)
    this.api.doAutoLogin(sub);

  }

  authorize() {
    window.open("http://localhost:8080/login/", "_self")
  }



}

interface userSubscriber {
  user: User
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
