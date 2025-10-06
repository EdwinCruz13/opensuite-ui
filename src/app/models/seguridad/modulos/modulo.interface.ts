import { SubModulo } from "./submodulo.interface";

export interface Modulo {
  moduloID: number;
  nModulo: string;
  codigo: string;
  icon: string;
  routerLink: string;
  descripcion: string;
  expanded?: boolean;
  subModulo?: SubModulo[];
}
