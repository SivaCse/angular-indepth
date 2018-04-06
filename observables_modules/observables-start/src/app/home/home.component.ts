import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe((number: number) => {
      //using default utility package of Observable
      console.log(number);
    });
  }

}
