import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input() defaultColor: string = 'deepskyblue';
  @Input() highlightColor: string = 'darkorchid';
  @Input() readColor: string = 'hotpink';

  @Input() defaultTextColor: string = 'white';

  @Input() padding : string = '1.3em';

  @Input() borderRadius: string = '15px';
  

  @HostBinding('style.backgroundColor') backgroundColor: string = 'deepskyblue';

  @HostBinding('style.color') textColor: string = this.defaultColor;
  @HostBinding('style.padding') textPadding: string = this.padding;
  @HostBinding('style.borderRadius') textBorderRadius: string = this.borderRadius;

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  //More detail on here https://angular.io/api/core/Renderer2
  ngOnInit(){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')//, !important
      //this.renderer.setStyle(this.elRef.nativeElement, 'color','white')//, !important
    //OR
      //this.backgroundColor = 'deepskyblue';
    //OR
    this.backgroundColor = this.defaultColor;
    this.textColor = this.defaultTextColor;
    this.textPadding = this.padding;
    this.textBorderRadius = this.borderRadius;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','orange')//, !important
    //OR
      //this.backgroundColor = 'darkorchid';
    //OR  
    this.backgroundColor = this.highlightColor;
    this.textColor = this.defaultTextColor;

  };
  @HostListener('mouseleave') mouseleave(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','pink')//, !important
    //OR
      //this.backgroundColor = 'hotpink';
    //OR
    this.backgroundColor = this.readColor;  
    this.textColor = this.defaultTextColor;

  }
}
