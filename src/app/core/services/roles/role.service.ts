import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/Global/ApiResponse.model';
import { Permission, Role } from '../../models/Roles/Roles.DTO';
import { routes } from 'src/app/shared/global/routes';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private http = inject(HttpClient);

  getPermissions = (): Observable<ApiResponse<Permission[]>> =>
    this.http.get<ApiResponse<Permission[]>>(routes.roles.permissions);

  getRoles = (): Observable<ApiResponse<Role[]>> => this.http.get<ApiResponse<Role[]>>(routes.roles.roles);
}
