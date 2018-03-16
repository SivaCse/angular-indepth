import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toDisplay: boolean = false;
  numDisp: number[] = [];
  displayNum: number = 0;

  displaySet(){
    this.toDisplay = true;
    setInterval(() => {
      if(this.toDisplay){
        this.numDisp.push(this.displayNum++);
        }
    }, 1000);
  }

  pauseSet(){
    this.toDisplay = false;
  }
}
