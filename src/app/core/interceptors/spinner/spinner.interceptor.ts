import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { GlobalService } from '../../services/global/global.service';
import { finalize } from 'rxjs';

/**
 * @constant spinnerInterceptor
 *
 * An HTTP interceptor function that manages the loading spinner state by interacting with the `GlobalService`.
 * The spinner is activated when the request starts and deactivated when the request completes.
 */
export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the GlobalService
  const globalService = inject(GlobalService);

  // Activate the spinner before the request is sent.
  globalService.setSpinner(true);

  // Handle the request and deactivate the spinner when it finalizes.
  return next(req).pipe(
    finalize(() => {
      globalService.setSpinner(false);
    })
  );
};
