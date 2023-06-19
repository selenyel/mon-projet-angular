import { Component } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-hw3',
  templateUrl: './hw3.component.html',
  styleUrls: ['./hw3.component.sass']
})
export class Hw3Component {

  hidePassword = true;
  passwordValue = '******';
  logHistory : {no:number, date:string,action:string}[] = [];
  currentNumber = 0;
  logNumberHistory : number[] = [];

  displayDetailsClicked(){
    this.hidePassword = !this.hidePassword;
    if(this.hidePassword)
      this.passwordValue='******'
    else
      this.passwordValue='tuna'

    let date = dayjs(new Date()).format('DD/MM/YYYY hh:mm');
    let action = this.hidePassword === true ? 'hid the password' : 'saw the password'
    this.logHistory.push({'no':this.currentNumber,'date': date, 'action': action})
    this.logNumberHistory.push(this.logNumberHistory.length + 1);

    ++this.currentNumber;
  }

  clearAll(){
    this.logNumberHistory = [];
    this.currentNumber = 0;
    this.logHistory = [];
    this.passwordValue = '******';
    this.hidePassword = true;
  }
}
