import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user-api';


@Component({
  selector: 'app-autologin',
  templateUrl: './autologin.component.html',
  styleUrls: ['./autologin.component.css']
})
export class AutologinComponent implements OnInit {

  user:User={}as User

  constructor() { }

  ngOnInit(): void {
  }

}


