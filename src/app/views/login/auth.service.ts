import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) {}

  fazerLogin(login: string, senha: string) {
    if (
      (login == 'jv.clavilho@hotmail.com' && senha == 'admin') ||
      (login == 'davimatos@frameworksystem.com' && senha == 'admin') ||
      (login == 'pedrocoutinho@frwk.com.br' && senha == 'admin')
    ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      alert('Login ou senha invalido');
    }
  }
}
