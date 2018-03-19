// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { AccountService } from '../accounts.service';

import { LogginService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService, AccountService]
  //providers: [LogginService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  constructor(private loggingService: LogginService, private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // wrong way of using services ..
    // const service = new LogginService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);

    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
