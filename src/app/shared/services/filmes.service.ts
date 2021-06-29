import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String());
    return this.http.get(`${this.url}films`, httpOptions);
  }
  getFilmeByUrl(url: string): Observable<any> {
    return this.http.get(url)
  }
}
