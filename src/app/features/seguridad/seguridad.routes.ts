import { Routes } from '@angular/router';
import { USUARIOS_ROUTES } from './usuarios/routes/usuarios.routes';


export const SEGURIDAD_ROUTES: Routes = [
  {
    path: 'usuarios',
    children: USUARIOS_ROUTES,
  }];
