import { Injectable } from '@angular/core';
import {Observable, of, delay, throwError} from 'rxjs';
import {LoginRequestModel} from '../models/login-request.model';
import {LoginResponseModel} from '../models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(data: LoginRequestModel): Observable<LoginResponseModel> {
      if(data.email === "rolando@test.com" && data.password === "123456") {
        return of({
          token: 'superTokenOP',
          user: {
            id: 1,
            nombre: 'Rolando',
            email: data.email,
          }
        }).pipe(delay(1000));
      }

      return throwError(() => new Error('Invalid email or password'));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
