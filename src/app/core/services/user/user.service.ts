import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { routes } from 'src/app/shared/global/routes';
import { ApiResponse } from '../../models/Global/ApiResponse.model';
import { UserLogged } from '../../models/Users/Me.DTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private authService = inject(AuthService);

  getMe = (): Observable<ApiResponse<UserLogged>> =>
    this.http.get<ApiResponse<UserLogged>>(routes.users.me).pipe(
      tap(res => this.authService.setUserLogged(res.value)),
      catchError(err => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);

        return throwError(() => new Error(err.error.errors || 'API Error'));
      })
    );
}
