import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/seguridad/auth/pages/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [{
    path: 'dashboard',
    loadComponent: () => import('./layouts/layout.component').then(m => m.LayoutComponent),
    children: [{
      path: 'seguridad',
      loadChildren: () => import('./features/seguridad/seguridad.routes').then( m => m.SEGURIDAD_ROUTES),
    },
    {
      path: 'modulos',
      loadChildren: () => import('./shared/modulos.routes').then(m => m.MODULOS_ROUTES),
    }],
    canActivate: [AuthGuard] //para protegre rutas de aquellos que entran sin token validao
  },




  {
    path: "",
    component: LoginPageComponent
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
