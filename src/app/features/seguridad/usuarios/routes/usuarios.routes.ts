import { Routes } from '@angular/router';

export const USUARIOS_ROUTES: Routes = [
  {
    path: 'listado',
    loadComponent: () =>
      import('../pages/listado/listado.component').then(m => m.ListadoComponent),
  },

  // en caso de que en la ruta de seguridad, escriba cualquier dato
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
];
