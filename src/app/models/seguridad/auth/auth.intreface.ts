import { SubModulo } from './../modulos/submodulo.interface';
import { Modulo } from "../modulos/modulo.interface";
import { Usuario } from '../usuario/usuario.interface';
import { Perfil } from '../perfiles/perfil.interface';

export interface auth {
  token: string;
  modulos: Modulo[];
  subModulo: SubModulo[];
  usuario: Usuario;
  perfiles: Perfil[];
}
