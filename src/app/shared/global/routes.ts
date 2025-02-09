import { environment } from 'src/environments/environment';

export const routes = {
  auth: {
    login: `${environment.api}auth/login`,
  },
  users: {
    me: `${environment.api}users/me`,
  },
  roles: {
    roles: `${environment.api}roles/`,
    myPermissions: `${environment.api}roles/by-user/`,
    updatePermissions: (roleId: string): string => `roles/${roleId}/permissions`,
    permissions: `${environment.api}permissions`,
  },
};
