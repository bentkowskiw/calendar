import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../shared/user-api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = ''
 

  loginFormGroup = this._formBuilder.group({
    loginForm: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder,private login:LoginService) { }

  ngOnInit(): void {
    this.url = environment.gateway + '/login/'
    this.login.autoLogin()
  }



}