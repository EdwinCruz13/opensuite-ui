import { Routes } from '@angular/router';

export const MODULOS_ROUTES: Routes = [
  {
    path: ':modulos',
    loadComponent: () =>
      import('../pages/modulo-pages.component').then(
        m => m.ModuloPagesComponent
    ),
  },

  
];
