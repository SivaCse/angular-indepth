import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // use this if need to change stles, rnderer is also fine
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  // similar to listening events in jquery onhover / on leave but w.r.t to the directive
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
