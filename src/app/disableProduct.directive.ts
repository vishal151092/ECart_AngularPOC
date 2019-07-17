import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
    selector:'[disableProduct]'
})
export class DisableProductDirective{

@Input('disableProduct') product; 

    constructor(private element : ElementRef){

    }

ngOnInit(){
    console.log(this.product);
    if(this.product.price < 5000){
        this.element.nativeElement.style.pointerEvents = 'none';
        this.element.nativeElement.style.opacity = 0.3;

    }
}
    
}