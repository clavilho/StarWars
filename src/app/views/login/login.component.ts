import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  //controle de validação dos campos
  login!: string
  senha!: string
  loginValidado!: boolean
  senhaValidade!: boolean
  //estado primitivo dos campos
  loginPrimitivo: boolean = true
  senhaPrimitivo: boolean = true



  constructor(private authService: AuthService, public dialogRef: MatDialog, private router: Router) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    });
  }

  validadorLogin() {
    const loginValue = this.loginForm.value
    this.login = loginValue.login

    this.loginPrimitivo = false

    if (this.login === '') {
      this.loginValidado = false
    } else this.loginValidado = true



  }
  validadorSenha() {
    const loginValue = this.loginForm.value
    this.senha = loginValue.senha
    this.senhaPrimitivo = false


    if (this.senha === '') {
      this.senhaValidade = false
    } else this.senhaValidade = true


  }

  logar() {
    const loginValue = this.loginForm.value
    if ((loginValue.login === "" || loginValue.login === null) || (loginValue.senha === "" || loginValue.senha === null)) {
      this.dialogRef.open(LoginModalComponent)
      this.senhaPrimitivo = false
      this.loginPrimitivo = false
    }
    else {
      this.authService.fazerLogin(loginValue.login, loginValue.senha);
    }



  }

}
