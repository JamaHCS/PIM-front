import { environment } from 'src/environments/environment';

export const routes = {
  graph: {
    me: `${environment.api}/me`,
    usersByEmail: `${environment.api}/users`,
  },
};
