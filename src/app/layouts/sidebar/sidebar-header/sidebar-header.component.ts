import { Component, EventEmitter,  Output } from '@angular/core';

import { CollapseService } from '../../../core/services/collapse.service';

@Component({
  selector: 'app-sidebar-header',
  imports: [],
  templateUrl: './sidebar-header.component.html',
})
export class SidebarHeaderComponent {
  constructor(public collapseService: CollapseService) {}
}
