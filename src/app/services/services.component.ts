import { Component, OnInit,Inject } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../shared/user-api';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from  '@angular/material/dialog';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showFiller: boolean = false

  constructor(public login: LoginService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(ServicesDialogComponent,{data:this.login.user});
  }
}


@Component({
  selector: 'services-dialog',
  templateUrl: './services-dialog.html',
  styleUrls: ['./services-dialog.css'],
})
export class ServicesDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private login:LoginService) {}

  deauth(){
    this.login.autoLogin()
  }
}

