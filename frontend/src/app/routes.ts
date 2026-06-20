import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { InventarioComponent } from './features/inventario/pages/inventario/inventario';
import { PedidosComponent } from './features/pedidos/pages/pedidos/pedidos';
import { EnvioComponent } from './features/envio/pages/envio/envio';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '',           component: Dashboard },
      { path: 'inventario', component: InventarioComponent },
      { path: 'pedidos',    component: PedidosComponent },
      { path: 'envios',     component: EnvioComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
