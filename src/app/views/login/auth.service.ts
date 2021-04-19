import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (
      usuario.login == 'jv.clavilho@hotmail.com' &&
      usuario.senha == 'admin'
    ) {
      this.usuarioAutenticado = true;
      alert('teste certo');

    } else {
      this.usuarioAutenticado = false;
      alert('teste erro')
    }

    this.router.navigate(['/home']);
  }
}
