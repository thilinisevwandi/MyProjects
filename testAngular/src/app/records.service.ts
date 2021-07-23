import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor (private http: HttpClient) {

  }

  getData() {
    return this.http.jsonp('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3','')
  }
}
