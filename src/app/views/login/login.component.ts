import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    });
  }

  logar() {
    const loginValue = this.loginForm.value
    this.authService.fazerLogin(loginValue.login, loginValue.senha);
  }
}
