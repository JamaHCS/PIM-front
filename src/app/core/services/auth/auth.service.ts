import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { routes } from 'src/app/shared/global/routes';
import { ApiResponse } from '../../models/Global/ApiResponse.model';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../models/Auth/Login.DTO';
import { UserLogged } from '../../models/Users/Me.DTO';
import { Router } from '@angular/router';
import { Role } from '../../models/Roles/Roles.DTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLoggedId$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userLogged$: BehaviorSubject<UserLogged | null> = new BehaviorSubject<UserLogged | null>(null);
  public userRoles$: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

  private http = inject(HttpClient);
  private router = inject(Router);

  setToken = (token: string) => localStorage.setItem('token', token);
  getToken = () => localStorage.getItem('token');
  logout = () => {
    this.router.navigate(['/auth/login']);
    localStorage.removeItem('token');
    this.setUserLogged(null);
    this.setRoles([]);
  };

  login = (request: LoginRequest): Observable<ApiResponse<LoginResponse>> =>
    this.http.post<ApiResponse<LoginResponse>>(routes.auth.login, request).pipe(
      tap(res => {
        this.userLoggedId$.next(res.value.token);
        this.setToken(res.value.token);
        this.getMe().subscribe();
        this.router.navigate(['/']);
      })
    );

  getMe = (): Observable<ApiResponse<UserLogged>> =>
    this.http.get<ApiResponse<UserLogged>>(routes.users.me).pipe(
      tap(res => {
        this.setUserLogged(res.value);
        this.getMyPermissions(res.value.id).subscribe();
      }),
      catchError(err => {
        this.logout();
        this.router.navigate(['/auth/login']);

        return throwError(() => new Error(err.error.errors || 'API Error'));
      })
    );

  getMyPermissions = (user: string): Observable<ApiResponse<Role[]>> =>
    this.http.get<ApiResponse<Role[]>>(routes.roles.myPermissions + user).pipe(tap(res => this.setRoles(res.value)));

  getRoles = (): Observable<Role[]> => this.userRoles$.asObservable();
  setRoles = (roles: Role[]) => this.userRoles$.next(roles);
  setUserLogged = (userLogged: UserLogged | null) => this.userLogged$.next(userLogged);
  getUserLogged = (): Observable<UserLogged | null> => this.userLogged$.asObservable();
  getUserLoggedValue = (): UserLogged | null => this.userLogged$.getValue();
}
