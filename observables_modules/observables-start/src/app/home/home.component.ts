import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myNumbers = Observable.interval(1000);
    this.numbersSubscription = myNumbers.subscribe((number: number) => {
      //using default utility package of Observable
      console.log(number);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('Second package');
      }, 4000);

// after complete or error the 6 seconds call will not be triggered

      setTimeout(() => {
        observer.error('this does not work');
      }, 5000);

      // setTimeout(() => {
      //   observer.complete();
      // }, 5000);

      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error);},
      () => { console.log('completed'); }
    );

  }

  ngOnDestroy(){
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }
}
