import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  buttons : string[] = ['Server Adder', 'Username Input', 'Show Password with Log','Bind it!', 'Basic Directive']
  title = 'mon-projet-angular';
  activeTab = 0;

  navbarClicked(value:any){
    this.activeTab = this.buttons.indexOf(value.target.innerText)
  }
}
