import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  // ✅ INVENTARIO DEBE IR ANTES DEL **
  {
    path: 'inventario',
    component: InventarioComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];
