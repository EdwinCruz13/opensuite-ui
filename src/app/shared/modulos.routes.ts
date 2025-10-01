import { Routes } from '@angular/router';

export const MODULOS_ROUTES: Routes = [
  {
    path: ':modulos',
    loadComponent: () =>
      import('../shared/pages/modules-page/modules-page.component').then(
        m => m.ModulesPageComponent
      ),
  },
];
