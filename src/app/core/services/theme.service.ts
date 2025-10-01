import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/**
 * con este servicio
 * se personalizara el tema oscuro o light
 * aplicar en todos los componentes que lleven estilos a webo
 * importar en todos los componente el servicii
 */
export class ThemeService {
  // Estado global de darkMode, usar signal es mejor que el puto zoneless
  // darkmode = false esta en blanco
  // darkmode = true, fondo negro
  darkMode = signal(false);

  //guardarlo en el localstorage como theme
  constructor() {
    // Recuperar el valor del localStorage al iniciar
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.darkMode.set(true);
    }
  }

  // Acción para cambiar el tema
  //guarda en el localstorage
  toggleDarkMode() {
    this.darkMode.update((v) => !v);

    // Guardar en localStorage el nuevo valor
    if (this.darkMode()) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
}
