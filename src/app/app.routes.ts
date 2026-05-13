import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Homepage } from './features/homepage/homepage';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'login',
    component: Login,
  },
];
