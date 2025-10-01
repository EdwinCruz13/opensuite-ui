import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';

import { Modulo } from '../../models/seguridad/modulos/modulo.interface';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { ModuleService } from '../../core/services/modulos.service';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

import { ThemeService } from '../../core/services/theme.service';
import { CollapseService } from '../../core/services/collapse.service';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [NgClass, SidebarHeaderComponent, SidebarMenuComponent, SidebarFooterComponent],
})
export class SidebarComponent {
  //obtiene el listado de modulos como parametro de entrad
  @Input() menu: Modulo[] | null = [];

  //obtiene y cambia el tema
  //usar servicio de theme para cambiar el color
  //ademas del servicio del menu expandible para sidebar
  constructor(public themeService: ThemeService, public collapseService: CollapseService) {}

  // instancia al servicio Module Service
  ModuleService = inject(ModuleService);

  //obtenemos la lista de los menu
  menu$: Observable<Modulo[]> = this.ModuleService.getModules();


}
