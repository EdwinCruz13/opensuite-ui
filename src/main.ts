import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(),
    provideAnimationsAsync(), providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ]
});
