import { Component } from '@angular/core';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.sass']
})
export class Hw2Component {

  username : string = ''

  onClearButton(){
    this.username = ''
  }
}
