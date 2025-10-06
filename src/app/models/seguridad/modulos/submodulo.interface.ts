import { Acciones } from "./acciones.interface";

export interface SubModulo {
  subModuloID: number;
  moduloID: number;
  nSubModulo: string;
  codigo: string;
  icon: string;
  routerLink: string;
  descripcion: string;
  acciones: Acciones[];
}
