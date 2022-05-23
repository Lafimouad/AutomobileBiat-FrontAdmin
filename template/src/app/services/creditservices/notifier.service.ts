import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from '../Utility/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar : MatSnackBar) { }

  showNotification(displayMessage :  string , titleText : string , messageType : 'error' | 'success'){
    this.snackBar.openFromComponent(NotifierComponent , {
      data : {
        message :displayMessage ,
        title : titleText,
        type : messageType
      },
      duration : 5000 ,
      horizontalPosition : 'right',
      verticalPosition : 'top',
      panelClass : messageType,

    }  )
  }
}
