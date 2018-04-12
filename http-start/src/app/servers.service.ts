import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'; // to unlock all operators
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
    // return this.http.get('https://angular-ng-http-e8b30.firebaseio.com/data.json');
    return this.http.get('https://angular-ng-http-e8b30.firebaseio.com/data')
               .map((response: Response) => {
                  const data = response.json();
                  for(const server of data){
                    server.name ='Fetched_' + server.name;
                  }
                  return data;
               })
               .catch(
                 (error: Response) => {
                  //console.log( error );
                  //  return Observable.throw(error);
                  return Observable.throw('Something went wrong');
                 }
               );
  }
}


// angular firebase : https://angular-ng-http-e8b30.firebaseio.com/
