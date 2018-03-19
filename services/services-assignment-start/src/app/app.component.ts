import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.services';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // activeUsers: string[] = [];
  // inactiveUsers: string[] = [];
  countValue: number;

  constructor(private userService: UsersService, private countService: CountService){
    this.countService.counterChanged.subscribe(
      (count: number) => {
        this.countValue = count;
      }
    );
  }

  ngOnInit(){
    // this.activeUsers = this.userService.activeUsers;
    // this.inactiveUsers = this.userService.inactiveUsers;
    this.countValue = this.countService.counter;
  }
}
