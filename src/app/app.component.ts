import { AfterContentInit, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements AfterContentInit {
  title = 'calendar';

  constructor(){}

  ngAfterContentInit(): void {
      
      
    }


}
