import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{


    constructor(private elementRef: ElementRef){
        
    }

    ngOnInit(): void {
        const elem = this.elementRef.nativeElement.style
        elem.backgroundColor = 'green';
        elem.color = 'white';
    }
}