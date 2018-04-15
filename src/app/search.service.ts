import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: Http) { }
  
  search(term: String){
    let promise = new Promise((resolve, reject)=>{
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(response =>{
          console.log(response.json());
        })

    });
    return promise;
  }

}
