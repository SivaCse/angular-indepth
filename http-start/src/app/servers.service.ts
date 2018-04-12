import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http){}

  storeServers(servers: any[]){
    // angular uses observables for http
    // as long as we dont subscribe request won't get fired
    // data.json is firebase specific
    return this.http.post('https://angular-ng-http-e8b30.firebaseio.com/data.json', servers);
  }
}


// angular firebase : https://angular-ng-http-e8b30.firebaseio.com/
