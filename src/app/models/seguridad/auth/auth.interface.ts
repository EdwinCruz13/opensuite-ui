import { Usuario } from '../usuario/usuario.interface';
import { Perfil } from '../perfiles/perfil.interface';
import { Acciones } from '../modulos/acciones.interface';
import { Empresa } from '../../configuraciones/empresa.interface';

export interface auth {
  token: string;
  acciones: Acciones[];
  usuario: Usuario;
  empresa: Empresa;
  perfiles: Perfil[];
}
