import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { routes } from 'src/app/shared/global/routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http: HttpClient = inject(HttpClient);

  getMeUser = () => this.http.get(routes.users.me);
}
