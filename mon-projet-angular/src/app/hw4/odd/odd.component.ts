import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.sass']
})
export class OddComponent {
  @Input() oddNumber: number | undefined;

  

}
