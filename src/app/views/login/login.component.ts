import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  //controle de validação de campos
  login!: string;
  senha!: string;
  loginValidado!: boolean;
  senhaValidado!: boolean;
  //estado primitivo dos campos
  loginPrimitivo: boolean = true;
  senhaPrimitivo: boolean = true;

  constructor(private authService: AuthService, private dialogRef: MatDialog) {}

  validarLogin() {
    const loginValue = this.loginForm.value;
    this.login = loginValue.login;
    this.loginPrimitivo = false;
    if (this.login === '') {
      this.loginValidado = false;
    } else this.loginValidado = true;
  }
  validarSenha() {
    const senhaValue = this.loginForm.value;
    this.senha = senhaValue.senha;
    this.senhaPrimitivo = false;
    if (this.senha === '') {
      this.senhaValidado = false;
    } else this.senhaValidado = true;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
    });


  }

  logar() {
    const loginValue = this.loginForm.value;
    if (
      loginValue.login === '' ||
      loginValue.login === null ||
      loginValue.senha === '' ||
      loginValue.senha === null
    ) {
      this.dialogRef.open(LoginModalComponent);
      this.senhaPrimitivo = false;
      this.loginPrimitivo = false;
    } else this.authService.fazerLogin(loginValue.login, loginValue.senha);
  }
}
