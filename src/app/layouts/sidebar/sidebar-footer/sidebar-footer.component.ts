import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar-footer',
  imports: [NgClass],
  templateUrl: './sidebar-footer.component.html',
})
export class SidebarFooterComponent {
  @Input() isCollapsed = false;
}
