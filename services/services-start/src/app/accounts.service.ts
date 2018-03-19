import { LogginService } from './logging.service';
import { Injectable } from '@angular/core';
// use if anyother service is to be injected here to this current files
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LogginService){}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange();
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
