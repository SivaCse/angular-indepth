import { EventEmitter } from '@angular/core';

export class CountService{
  counter: number = 0;
  counterChanged = new EventEmitter<number>();
  a2i = 0;
  i2a= 0;


  incCount(){
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

  incrementa2i() {
    this.a2i++;
    console.log(this.a2i);
  }

  incrementi2a(){
    this.i2a++;
    console.log(this.i2a);
  }
}
