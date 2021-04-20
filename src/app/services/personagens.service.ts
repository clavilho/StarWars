import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPersonagem(numeroPagina: number): Observable<any> {
    const httpOptions: any = {};
    httpOptions.params = new HttpParams().set('page', String(numeroPagina));
    return this.http.get<any>(`${this.url}people`, httpOptions);
  }
}
