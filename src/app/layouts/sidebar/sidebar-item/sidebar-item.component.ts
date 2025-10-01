import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Modulo } from '../../../models/seguridad/modulos/modulo.interface';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  expanded = false;
  @Input() isCollapsed = false;


  @Input() item: Modulo | null = { moduloID: 0, descripcion: "", nModulo: "", icon: "", codigo: "", route: "", subModulo: []};

  /**
   * obtiene el modulo expandido
   * @param item
   */
  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }
}
