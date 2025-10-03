import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { TokenInterceptor } from './app/core/interceptors/token.interceptor';

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
    provideAnimationsAsync(), providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ]
});
