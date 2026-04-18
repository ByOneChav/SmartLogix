import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  error = '';
  loading = false;

  constructor(private authService: AuthService) {}

  login(): void {
    this.loading = true;
    this.error = '';
    this.authService.login({
      email: this.email,
      password: this.password,
    }).subscribe({
      next:(res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('login correcto');

        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    })
  }

}
