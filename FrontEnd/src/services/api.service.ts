import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {

    let headers;

    headers = new HttpHeaders({
      Accept: 'application/json'
    });

    return headers;
  }

  getContacts(): Observable<any> {
    return this.http.get('http://localhost:4201/api/heroes');
  }

  evolveHero(name: string): Observable<any> {
    let reqParams = new HttpParams();
    reqParams = reqParams.append('value', name);
    reqParams = reqParams.append('action', 'evolve');
    return this.http.post('http://localhost:4201/api/heroes', name, { params: reqParams, observe: 'response', headers: this.getHeaders() });
    // { params: reqParams, observe: 'response' });
  }
}
