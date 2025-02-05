import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './authentication.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ],
  },
];
