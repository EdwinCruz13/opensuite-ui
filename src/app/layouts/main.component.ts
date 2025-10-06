import { Component, inject, Signal } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { NgClass, CommonModule } from '@angular/common';
import { ModuleService } from '../core/services/modulos.service';
import { Observable } from 'rxjs';
import { Modulo } from '../models/seguridad/modulos/modulo.interface';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    ContentComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainLayoutComponent {
  //usar servicio de theme para cambiar el color
  constructor(public themeService: ThemeService) { }

  //servicio de listado de modulos, perfiles, usuarios y permisos
  //que se compartira por todo el proyecto
  permissionService = inject(ModuleService);

  //obtener todo los modulos permitidos
  menu$: Observable<Modulo[]> = this.permissionService.getModules();


}
