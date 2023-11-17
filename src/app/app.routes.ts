import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component')},
  { path: 'register', loadComponent: () => import('./components/auth/register/register.component')},
  { path: 'login', loadComponent: () => import('./components/auth/login/login.component')},
];
