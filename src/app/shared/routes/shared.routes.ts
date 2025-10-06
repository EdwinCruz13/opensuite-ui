import { Routes } from '@angular/router';

export const SHARED_ROUTES: Routes = [
  {
    path: ':modulos',
    loadComponent: () =>
      import('../pages/modules-page/modules-page.component').then(
        m => m.ModulesPageComponent
    ),
  },

  
];
