import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { Login } from './interface/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private usuarios!: Login[]
  constructor(private router: Router, private loginService: LoginService) {

  }

  fazerLogin(login: string, senha: string) {
    // this.loginService.getUser().subscribe(
    //   (users) => {
    //     this.usuarios = users.results
    //     console.log(this.usuarios)
    //     if (this.usuarios.find(el => el.login == login)) {
    //       this.usuarioAutenticado = true;
    //       console.log(this.usuarios)
    //       this.router.navigate(['/home']);
    //     } else {
    //       this.usuarioAutenticado = false;
    //       alert('Login ou senha invalido');
    //     }
    //   }
    // )

    if(login === "admin" && senha === "admin"){
      this.router.navigate(['/home'])
    }
  }
}
