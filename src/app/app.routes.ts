import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Homepage } from './features/homepage/homepage';
import { TestApi } from './features/test-api/test-api';
import { Dashboard } from './features/dashboard/dashboard';
import { PublicLayout } from './shared/public-layout/public-layout';
import { Settings } from './features/dashboard/settings/settings';
import { Profile } from './features/dashboard/profile/profile';
import { Home } from './features/dashboard/home/home';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Homepage },
      { path: 'login', component: Login },
      { path: 'test-api', component: TestApi },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'settings', component: Settings },
      { path: 'profile', component: Profile },
    ],
  },
];
