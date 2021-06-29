import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPersonagem(numeroPagina: number): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String(numeroPagina));
    //http://swapi.dev/api/people/?page=4
    console.log(`${this.url}people`, httpOptions);
    return this.http.get(`${this.url}people`, httpOptions);
  }

  getPersonagemByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
  //https://swapi.dev/api/people/?search=
  pesquisaPersonagem(termo: string): Observable<any> {
    return this.http.get(`${this.url}people/?search=${termo}`).pipe(
      retry(3),
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
