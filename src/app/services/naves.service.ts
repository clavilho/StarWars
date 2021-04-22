import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavesService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getNaves(numeroPagina: number): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String(numeroPagina));
    //http://swapi.dev/api/starships/?page=2
    return this.http.get(`${this.url}starships`, httpOptions);
  }
}
