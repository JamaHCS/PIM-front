import { environment } from 'src/environments/environment';

export const routes = {
  auth: {
    login: `${environment.api}auth/login`,
  },
  users: {
    me: `${environment.api}users/me`,
  },
  roles: {
    myPermissions: `${environment.api}roles/by-user/`,
  },
};
