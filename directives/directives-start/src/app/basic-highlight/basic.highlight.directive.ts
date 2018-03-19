
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]'  // this is be regognised in templates oly by name appBasicHighLight
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){}

  // this approach is not advisable
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green';
  }
}


/*
  directive has only onInit and onDestroy hooks
*/
