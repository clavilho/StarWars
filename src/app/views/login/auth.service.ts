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
    //O CODIGO COMENTADO ABAIXO É A AUTENTICAÇÃO NA FAKE API
    //PARA QUE ELE SEJA RODADO E ACESSE A API É NECESSARIO RODAR O COMANDO
    //json-server --watch banco-de-dados.json
    
    // console.log('teste')
    // this.loginService.getUser().subscribe(
    //   (users) => {
    //     this.usuarios = users
    //     if (this.usuarios.find(el => el.user === login && el.password === senha)) {
    //       this.usuarioAutenticado = true;
    //       console.log(this.usuarios)
    //       this.router.navigateByUrl('/home');
    //     } else {
    //       this.usuarioAutenticado = false;
    //       alert('Login ou senha invalido');
    //     }
    //   }
    // )

    if (login === 'admin' && senha === 'admin') {
      this.router.navigate(['/home'])
    }
  }
}
