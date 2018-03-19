import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  constructor(private loggingService: LogginService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // wrong way of using services ..
    // const service = new LogginService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);

    this.loggingService.logStatusChange(accountStatus);
  }
}
