import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPlanetas(numeroPagina: number): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String(numeroPagina));
    //http://swapi.dev/api/planets/?page=2
    return this.http.get(`${this.url}planets`, httpOptions);
  }
}
