import { SubModulo } from "./submodulo.interface";

export interface Modulo {
  moduloID: number;
  nModulo: string;
  codigo: string;
  icon: string;
  route: string;
  descripcion: string;
  expanded?: boolean;
  subModulo?: SubModulo[];
}
