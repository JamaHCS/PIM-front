import { Route } from '@angular/router';
import { RolesComponent } from './roles.component';
import { IndexComponent } from './components/index/index.component';

export const ROLES_ROUTES: Route[] = [
  {
    path: '',
    component: RolesComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ],
  },
];
