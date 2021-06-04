import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://localhost:3001'
  // new
  constructor(
    private HttpClient: HttpClient
  ) { }
  
  getBands() : Observable<any> {
    return this.HttpClient.get(this.host + `/getBands`);
  }

  getMerch(bandId) : Observable<any> {
    return this.HttpClient.get(this.host + `/getMerch/`+ bandId);
  }

  getMerchById(merchId) : Observable<any> {
    return this.HttpClient.get(this.host + `/getMerchById/`+ merchId);
  }
}
