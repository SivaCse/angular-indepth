import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http){}

  storeServers(servers: any[]){
    // angular uses observables for http
    // as long as we dont subscribe request won't get fired
    // data.json is firebase specific

    // to send headers
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-ng-http-e8b30.firebaseio.com/data.json',
    //                        servers,
    //                         {headers: headers}
    //                       );

    return this.http.put('https://angular-ng-http-e8b30.firebaseio.com/data.json',
                           servers,
                            {headers: headers}
                          );
  }

  getServers() {
    return this.http.get('https://angular-ng-http-e8b30.firebaseio.com/data.json');
  }
}


// angular firebase : https://angular-ng-http-e8b30.firebaseio.com/
