import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../views/login/interface/login';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/login'
  constructor(private http: HttpClient) { }

  public getUser(): Observable<Login[]> {
    return this.http.get<Login[]>(this.url)
  }
}
