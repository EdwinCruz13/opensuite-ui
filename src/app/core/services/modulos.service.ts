import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/enviroment';

import { ApiResponse } from '../../models/apiresponse.interface'
import { Modulo } from '../../models/seguridad/modulos/modulo.interface';


//usar variables global
const baseUrl = environment.baseUrl;
const UrlService = `${baseUrl}/Modulos`


@Injectable({
  providedIn: 'root'
})
export class ModuleService {
   private http = inject(HttpClient);
   modulos = signal<Modulo[]>([]);

  /**
   * Obtiene la lista de modulos y sus submodulos
   * a traves del webservices
   * @returns
   */
   getModules(): Observable<Modulo[]>
   {
    return this.http.get<ApiResponse<Modulo>>(UrlService).pipe(
      map(data => data),
      map((resp) => {
        if(!resp.data) return [];
        return Array.isArray(resp.data) ? resp.data : [resp.data];
      }),
      tap()
    );
  }

  /**
   * obtiene la lista de modulos usando la ruta como parametro
   * @param route
   * @returns
   */
  getModulesByRoute(route: string): Observable<Modulo | null> {
    return this.http
      .get<ApiResponse<Modulo>>(`${UrlService}/search/${route}`)
      .pipe(
        map((resp) => {
          if (!resp.data) return null;
          return Array.isArray(resp.data) ? resp.data[0] : resp.data;
        }),
        tap((resp) => console.log(`${UrlService}/search/${route}`))
      );
  }


}
