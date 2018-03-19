import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from './../users.services';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UsersService){}

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }

  // onSetToInactive(id: number) {
  //   // this.inactiveUsers.push(this.activeUsers[id]);
  //   // this.activeUsers.splice(id, 1);
  //   this.userService.onSetToActive(id);
  // }

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }
}
