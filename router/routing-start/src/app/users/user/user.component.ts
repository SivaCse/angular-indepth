import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// to handle destorying of subscription's

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// angular handles destroying of this subscription automatically for route observables, if not we would have needed to handle it

// export class UserComponent implements OnInit {
//   user: {id: number, name: string};
//
//   constructor(private route: ActivatedRoute) { }
//
//   ngOnInit() {
//     this.user = {
//       id: this.route.snapshot.params['id'],
//       name: this.route.snapshot.params['name']
//     }
//     // when ever reloading the same component or page instead to re-intialise the component which is aperformance issue
//     // this approach is better, params is an observable
//     this.route.params
//               .subscribe(
//                 (params: Params) => {
//                   // when ever params changes this function executes
//                   this.user.id = params['id'];
//                   this.user.name = params['name'];
//                  },
//               );
//   }
//}


// code manually handing cleaning of subscription's
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // when ever reloading the same component or page instead to re-intialise the component which is aperformance issue
    // this approach is better, params is an observable
    this.paramsSubscription = this.route.params
              .subscribe(
                (params: Params) => {
                  // when ever params changes this function executes
                  this.user.id = params['id'];
                  this.user.name = params['name'];
                 },
              );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
