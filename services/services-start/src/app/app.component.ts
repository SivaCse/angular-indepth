import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = []

  constructor(private accountService: AccountService){}

  // intialisation should always happen in OnInit only and not in constructor
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
