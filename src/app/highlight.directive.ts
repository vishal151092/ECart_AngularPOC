import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(private element: ElementRef) {
        //this.element.nativeElement.style.color='red';
    }

    @HostListener('mouseenter') increaseSize(){
this.element.nativeElement.style.border = "1px solid blue";
    }

    @HostListener('mouseleave') reduceSize(){
  this.element.nativeElement.style.border = "1px solid black";
    }
}

