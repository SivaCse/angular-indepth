import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
            ) { }

  ngOnInit() {

    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    //// params returned will be string, need to parse them, '+' converts the params from string to number
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //           .subscribe(
    //             (params: Params) => {
    //               this.server = this.serversService.getServer(+params['id']);
    //             }
    //           )
  }

  onEdit(){
    // here the route is localhost:3000/servers/1
    // absolute, telling the entire path from localhost:3000, i.e /servers/1/edit
    //this.router.navigate(['/servers', this.server.id, 'edit']);
    // this is relative path, meaning from current route i'e localhost:3000//servers/1
    // queryParamsHandling => merge to add more params
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
