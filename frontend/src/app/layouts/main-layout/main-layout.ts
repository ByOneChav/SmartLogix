import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UserModel} from "../../features/auth/models/user.model";
import {Usuario} from "../../core/models/usuario";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatSidenavModule, MatListModule, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  usuario: Usuario | null = null;

  constructor(private router: Router) {
    const data = localStorage.getItem('user');
    if (data) {
      this.usuario = JSON.parse(data)
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
