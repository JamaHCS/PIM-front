import { Route } from '@angular/router';
import { UsersComponent } from './users.component';

export const USERS_ROUTES: Route[] = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ],
  },
];
