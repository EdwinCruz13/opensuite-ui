import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
/**
 * el interceptor agregara el token a cada solicitud http
 * ademas de validar si el usuario tiene permiso
 * se redigira al login si no tiene permisos o autenticado
 */
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Usuario no autenticado tonces redirigir al login
          console.warn("No autorizado: redirigiendo al login...");
          this.router.navigate(['/login']);
        }

        else if (error.status === 403) {
          // Usuario autenticado pero sin permiso
          console.error("Acceso denegado: no tienes permisos.");
          this.router.navigate(['/forbidden']);
        }

        return throwError(() => error);
      })
    );
  }
}
