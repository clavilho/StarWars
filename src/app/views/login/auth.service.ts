import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor(private router:Router) { }

  fazerLogin(usuario: Usuario,) {
  //   if (usuario.login === 'jv.clavilho@hotmail.com' && usuario.senha === '123') {
  //     this.usuarioAutenticado = true
  //     this.router.navigate(['/principal'])
  //   }else{
  //     this.usuarioAutenticado = false
  //   }
  // }

  this.router.navigate(['/principal'])
  }
}
