import { Component } from '@angular/core';

@Component({
  selector: 'app-hw4',
  templateUrl: './hw4.component.html',
  styleUrls: ['./hw4.component.sass']
})
export class Hw4Component {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    console.log(firedNumber);

    if(firedNumber%2 === 0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
