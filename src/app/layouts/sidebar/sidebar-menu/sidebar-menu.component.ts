import { Component, Input } from '@angular/core';
import { Modulo } from '../../../models/seguridad/modulos/modulo.interface';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';


@Component({
  selector: 'app-sidebar-menu',
  imports: [SidebarItemComponent],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  @Input() menu: Modulo[] | null = [];
  @Input() isCollapsed = false;



}
