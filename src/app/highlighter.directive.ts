import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor() { }

  b:string;
  @Input() c:string='red';

  @HostListener("mouseenter") mouseover(){
    this.b= this.c;

  }
  @HostListener("mouseleave") mouseleave(){
    this.b='black';
    //this.b='white';
   // this.b='20px';

  }
 /* @HostBinding('style.font-size') get setfontsize()
  {
    return this.b;
  }*/

  /*@HostBinding('style.font-family') get setfont1()
  {
    return this.b;
  }*/
 /* @HostBinding('style.background-color') get setcolor1()
  {
    return this.b;
  }*/

 @HostBinding('style.color') get setfontcolor()
  {
    return this.b;
  }



}
