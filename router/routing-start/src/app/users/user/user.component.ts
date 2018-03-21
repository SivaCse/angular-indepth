import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // when ever reloading the same component or page instead to re-intialise the component which is aperformance issue
    // this approach is better
    this.route.params
              .subscribe(
                (params: Params) => {
                  // when ever params changes this function executes
                  this.user.id = params['id'];
                  this.user.name = params['name'];
                 },
              );
  }

}
