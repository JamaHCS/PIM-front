import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { routes } from 'src/app/shared/global/routes';
import { ApiResponse } from '../../models/Global/ApiResponse.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../models/Auth/Login.DTO';
import { UserLogged } from '../../models/Users/Me.DTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLoggedId$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  public userLogged$: BehaviorSubject<UserLogged | undefined> = new BehaviorSubject<UserLogged | undefined>(undefined);

  private http = inject(HttpClient);

  setToken = (token: string) => localStorage.setItem('token', token);
  getToken = () => localStorage.getItem('token');
  logout = () => localStorage.removeItem('token');

  login = (request: LoginRequest): Observable<ApiResponse<LoginResponse>> =>
    this.http.post<ApiResponse<LoginResponse>>(routes.auth.login, request).pipe(
      tap(res => {
        this.userLoggedId$.next(res.value.token);
        this.setToken(res.value.token);
      })
    );

  setUserLogged = (userLogged: UserLogged) => this.userLogged$.next(userLogged);
  getUserLogged = (): Observable<UserLogged | undefined> => this.userLogged$.asObservable();
  getUserLoggedValue = (): UserLogged | undefined => this.userLogged$.getValue();
}
