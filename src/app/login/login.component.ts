import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Response } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string = ""

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getLoginURL();
  }



  getLoginURL() {
    // const observer() = {
    //   next(value: Response) {
    //     console.log("val: " + value.message);

    //   },
    //   error() {
    //     console.log("error");
    //   },
    //   complete() {
    //     console.log("complete");
    //   }
    // };
    this.loginService.getLoginURL().subscribe((resp: Response) => {
      this.url = resp.message
    });
  }

}

