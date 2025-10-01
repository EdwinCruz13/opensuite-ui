import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/seguridad/auth/pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'seguridad',
        loadChildren: () =>
          import('./features/seguridad/seguridad.routes').then(
            m => m.SEGURIDAD_ROUTES
          ),
      },
      {
        path: 'modulos',
        loadChildren: () =>
          import('./shared/modulos.routes').then(m => m.MODULOS_ROUTES),
      },
    ],
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/pages/not-found-page/not-found-page.component').then(
        m => m.NotFoundPageComponent
      ),
  },
];
