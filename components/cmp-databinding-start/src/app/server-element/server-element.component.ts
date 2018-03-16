import {  Component,
          OnInit,
          Input,
          ViewEncapsulation,
          SimpleChange,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChange){
    // only one to get an arg
    // element is this input element
    //console.log(changes);
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    // for any change detection
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    // runs when the ng-content is used and the content from parent is inserted into
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    // gets call after change detection
    console.log('ngAAfterContentChecked called');
  }

  ngAfterViewInit() {
    // something like dom ready, once all elements loaded then we can access
    console.log('AfterViewInit called');
  }

  ngAfterViewChecked() {
    // after the content is checked
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    // called when component destroyed
    console.log('ngOnDestroy called');
  }
}
