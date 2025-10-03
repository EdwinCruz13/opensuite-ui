import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { ApiResponse } from '../../models/apiresponse.interface';
import { auth } from '../../models/seguridad/auth/auth.interface';
import { login } from '../../models/seguridad/auth/login.interface';
import { LocalStorageService } from './localstorage.service';

const baseUrl = environment.baseUrl;



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //injectar la directiva httpClient
  private http = inject(HttpClient);
  private storageService = inject(LocalStorageService);
  login: login = {username: "", password: ""}

  /**
   * Metodo que verifica login
   * @returns
   */
postLogin(username: string, password: string): Observable<auth | auth[] | null> {
  const UrlService = `${baseUrl}/auth/login`;
  const body: login = { username, password };

  return this.http.post<ApiResponse<auth>>(UrlService, body).pipe(
    map(resp => resp.data as auth)
    ,tap(data => {
      if (data) {
        //SI ESTA BIEN, GUARDAMOS EL TOKEN EN EL LOCALSTORAGE
        this.storageService.setItem("token", data.token);
        this.storageService.setItem("user", JSON.stringify(data.usuario));
        this.storageService.setItem("roles", JSON.stringify(data.perfiles));
        this.storageService.setItem("acciones", JSON.stringify(data.acciones));
        this.storageService.setItem("empresa", JSON.stringify(data.empresa));
      }
    })
  );
  }

}
