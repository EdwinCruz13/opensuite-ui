import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * variables en el localstorage
 */
export class LocalStorageService {

  private storage = localStorage;

  //crer un item en el localstorage
  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }


  //obtener el valor del localstorage
  getItem<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) as T : null;
  }


  //remover el item en especifico
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  //borrar todo
  clear(): void {
    this.storage.clear();
  }


}
