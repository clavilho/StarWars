import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = new FormControl('');
  senha = new FormControl('');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logar() {
    this.authService.fazerLogin(this.login.value, this.senha.value);
  }
}
