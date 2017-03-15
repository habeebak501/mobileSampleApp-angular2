
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class getJsonDataService {
  constructor(private http: Http) { }

  getJsonData(){
    return this.http.get('http://angular2-demo-7ce23.firebaseio.com/.json')
      .map(response => response.json());
  }
}
