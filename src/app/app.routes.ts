import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Homepage } from './features/homepage/homepage';
import { TestApi } from './features/test-api/test-api';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'test-api',
    component: TestApi,
  },
];
