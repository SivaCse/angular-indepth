import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighLight]" // this is be recognised in templates oly by name appBasicHighLight as attribute, if only 'appBasicHighLight' is used then it will be an element
})
export class BasicHighlightDirective implements OnInit {
  // this gives us access to the elemnt this directive sits on
  constructor(private elementRef: ElementRef) {}

  // this approach is not advisable
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}

/*
  directive has only onInit and onDestroy hooks
*/
