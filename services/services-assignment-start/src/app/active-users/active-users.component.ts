import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { UsersService } from './../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
 //  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UsersService){}

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
  }

  // onSetToActive(id: number) {
  //   // this.activeUsers.push(this.inactiveUsers[id]);
  //   // this.inactiveUsers.splice(id, 1);
  //   this.userService.onSetToInactive(id);
  // }
}
