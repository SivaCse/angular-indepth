// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService, AccountService]
  providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LogginService, private accountService: AccountService){}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.addAccount(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
