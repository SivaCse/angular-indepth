import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    // this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
      this.serverCreated.emit({serverName: serverNameInput.value,
                               serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // this.bluePrintCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent});
    this.bluePrintCreated.emit({serverName: serverNameInput.value,
                                serverContent: this.serverContentInput.nativeElement.value});
  }

}
