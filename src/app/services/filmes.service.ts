import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFilmes(numeroPagina: number): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String(numeroPagina));
    return this.http.get(`${this.url}films`, httpOptions);
  }
}
