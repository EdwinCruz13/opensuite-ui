import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/**
 * con este servicio
 * se personalizara el sidebar
 * aplicar en todos los componentes que lleven estilos a webo
 * importar en todos los componente el servicii
 */
export class CollapseService {
  //el menu colapsado = false
  //el menu expandible = true
  isCollapsed = signal(false);

  //recupera el valor del localstoraged al inicial
  constructor() {
    const storedCollapsed = localStorage.getItem('isCollapsed');
    if (storedCollapsed === "true") {
      this.isCollapsed.set(true);
    }
  }

  /**
   * cambia el estado del sidebar
   * false es abierto
   * true es cerrado
   * mmmmmmmmmm XD
   */
  toggleSidebar() {
    this.isCollapsed.update((v) => !v);

    // Guardar en localStorage el nuevo valor
    if (this.isCollapsed()) {
      localStorage.setItem('isCollapsed', "true");
    } else {
      localStorage.setItem('isCollapsed', 'false');
    }
  }
}
