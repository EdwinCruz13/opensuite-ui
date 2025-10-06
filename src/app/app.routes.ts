import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main.component';

export const routes: Routes = [

  //esta es publica
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/seguridad/auth/routes/auth.routes').then(m => m.AUTH_ROUTES),
  },


  {
    path: '',
    component: MainLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'seguridad',
        loadChildren: () =>
          import('./features/seguridad/seguridad.routes').then(m => m.SEGURIDAD_ROUTES)
      },

      //recorda pegar las demas routes de los demas modulos aca abajo :P

      {
        path: '',
        redirectTo: 'seguridad', //para mientras este sera la ruta principal, si haces dashboard anadilo
        pathMatch: 'full'
      }
    ]
  },

  //si la url no es valida, enviar a not found page
  {
    path: '**',
    loadChildren: () =>
      import('./shared/not-found/routes/not-found.routes').then(m => m.NOTFOUND_ROUTES)
  }
];




// import { Routes } from '@angular/router';
// import { MainLayoutComponent } from './layouts/main.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       {
//         path: 'seguridad',
//         loadChildren: () =>
//           import('./features/seguridad/seguridad.routes').then(m => m.SEGURIDAD_ROUTES)
//       },
//       // {
//       //   path: 'finanzas',
//       //   loadChildren: () =>
//       //     import('./features/finanzas/finanzas.routes').then(m => m.routes)
//       // },
//       {
//         path: '',
//         redirectTo: 'seguridad',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '**',
//     loadChildren: () =>
//       import('./shared/pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
//   }
// ];




// // import { Routes } from '@angular/router';
// // import { LoginPageComponent } from './features/seguridad/auth/pages/login-page/login-page.component';
// // import { AuthGuard } from './core/guards/auth.guard';

// // export const routes: Routes = [{
// //     path: 'dashboard',
// //     loadComponent: () => import('./layouts/main.component').then(m => m.LayoutComponent),
// //     children: [{
// //       path: 'seguridad',
// //       loadChildren: () => import('./features/seguridad/seguridad.routes').then( m => m.SEGURIDAD_ROUTES),
// //     },
// //     {
// //       path: 'modulos',
// //       loadChildren: () => import('./shared/routes/shared.routes').then(m => m.SHARED_ROUTES),
// //     }],
// //     canActivate: [AuthGuard] //para protegre rutas de aquellos que entran sin token validao
// //   },

// //   {
// //     path: "",
// //     component: LoginPageComponent
// //   },
// //   {
// //     path: "login",
// //     component: LoginPageComponent
// //   },

// //   {
// //     path: '**',
// //     loadComponent: () =>
// //       import('./shared/pages/not-found-page/not-found-page.component').then(
// //         m => m.NotFoundPageComponent
// //       ),
// //   },
// // ];
