import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'  // attribute selector
})
export class ColorizerDirective {

  // 2. change the color of the el

  constructor( elRef: ElementRef, renderer: Renderer2 ) { 
    console.log('Inside Colorizer Directive\'s Constructor');
    // 1. find the el in which appColorizer directive is used
    console.log(elRef.nativeElement);
    let myEl = elRef.nativeElement;

    // using JS, I can change the DOM
    // myEl.style.backgroundColor = 'red';
    // myEl.style.color = 'white';

    // Recommended: use renderer if you want to change the DOM
    renderer.setStyle(myEl, 'backgroundColor', 'red');
    renderer.setStyle(myEl, 'color', 'white');
  }

}
