import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.sass']
})

// @Output() 21
export class GameControlComponent{

  @Output() intervalFired = new EventEmitter<number>();

  currentTime : number = 0;
  addedTime: number = 1000;
  isPaused : boolean = true;
  y : any | null | undefined;

  onClickPlay(event: MouseEvent){
    var that = this;
    if(this.isPaused){
      this.isPaused=false;
      this.y =  setInterval( 
        function(){
            that.intervalFired.emit(that.currentTime + 1);
            that.currentTime++;
        } , that.addedTime 
      )  
    }
  }
  onClickPaused(event: MouseEvent){
    if(!this.isPaused){
      this.isPaused=true;
      clearInterval(this.y)
    }
  }
  isActive(type:string){
    if(type == 'pause'){
      if(this.isPaused)
        return {'box':true};
      return {'color':'white'}  
    }
    if(type == 'play')
      if(!this.isPaused)
        return {'box':true};
    return {'color':'white'}  

  }

}
