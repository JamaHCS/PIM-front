import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { Global } from './shared/global/global';
import { pimTheme } from './shared/global/prime.theme';
import { spinnerInterceptor } from './core/interceptors/spinner/spinner.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptors/token/token.interceptor';
import { MessageService } from 'primeng/api';
import { errorInterceptor } from './core/interceptors/error/error.interceptor';
import { AuthService } from './core/services/auth/auth.service';
import { GlobalService } from './core/services/global/global.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([spinnerInterceptor, tokenInterceptor, errorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: pimTheme,
        options: {
          darkModeSelector: '.dark-theme',
          lightModeSelector: '.light-theme',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
      translation: Global.translations,
    }),
    MessageService,
    AuthService,
    GlobalService,
  ],
};
