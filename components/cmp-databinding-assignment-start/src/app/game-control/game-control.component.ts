import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() beginGame = new EventEmitter<{}>();
  @Output() finishGame = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.beginGame.emit();
  }

  endGame(){
    this.finishGame.emit();
  }

}
