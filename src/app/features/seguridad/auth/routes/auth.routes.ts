import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginPageComponent },
      //{ path: 'signup', component: SignupPageComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
