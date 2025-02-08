import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./features/authentication/Authentications.routes').then(m => m.AUTH_ROUTES),
      },
      { path: 'users', component: HomeComponent },
      { path: 'roles', component: HomeComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
