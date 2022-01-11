import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = ''
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.url = environment.gateway + '/login/'
    this.login();
    // this.loginService.doLogin();
  }

  submit(){
    window.open(this.url)
  }

  login(){
    this.loginService.doLogin()
  }
}