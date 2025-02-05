import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { ApiResponse } from '../../models/Global/ApiResponse.model';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService: MessageService = inject(MessageService);

  return next(req).pipe(
    catchError(error => {
      const apiError = error.error as ApiResponse<unknown>;

      let errorMessage: string = 'Ocurrió un error inesperado.';

      if (Array.isArray(apiError.errors)) errorMessage = apiError.errors.join(', ');
      else if (apiError.errors) errorMessage = apiError.errors as string;

      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage,
        life: 7000,
      });

      return throwError(() => error);
    })
  );
};
