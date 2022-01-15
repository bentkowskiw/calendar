import { Component, OnInit,Inject } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../shared/user-api';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DATA,MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showFiller: boolean = false

  constructor(public login: LoginService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef= this.dialog.open(ServicesDialogComponent,{data:this.login.user});

    dialogRef.afterClosed().subscribe(result => {
      
      if(result===1){
        this.login.logout()
        
      } else if(result===2){
        let snackBarRef = this._snackBar.open('If you deauthorize, we will no longer be able to send you notifications. Please confirm you want to deauthorize permanently!', 'Confirm',{duration:3000});
        snackBarRef.onAction().subscribe(() => {
          this.login.deauthorize();
        });
        
        
      }
      
    });
  }
}


@Component({
  selector: 'services-dialog',
  templateUrl: './services-dialog.html',
  styleUrls: ['./services-dialog.css'],
})
export class ServicesDialogComponent {

  isChecked=false
  closeVal=this.getCloseVal()

  constructor(public dialogRef: MatDialogRef<ServicesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    ) {}

    toggle(){
      this.isChecked=!this.isChecked
      this.closeVal=this.getCloseVal()
    }

    private getCloseVal():number{
      if (this.isChecked) return 2
      return 1
    }
}


@Component({
  selector: 'snackbar',
  template: 'passed in {{ data }}',
})
export class MessageArchivedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}

