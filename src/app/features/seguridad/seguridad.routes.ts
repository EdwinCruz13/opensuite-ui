import { Routes } from '@angular/router';


export const SEGURIDAD_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuarios/routes/usuarios.routes').then(m => m.USUARIOS_ROUTES)
      },

      {
        path: 'modulos',
        loadChildren: () =>
          import('./modulos/routes/modulos.routes').then(m => m.MODULOS_ROUTES)
      },

    ]
  }
];
