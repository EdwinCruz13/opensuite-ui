import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { ThemeService } from '../../core/services/theme.service';
import { DarkToggleComponent } from '../../shared/components/dark-toggle/dark-toggle.component';

@Component({
  selector: 'app-topbar',
  imports: [DarkToggleComponent],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  //controla el modo oscuro
  constructor(public themeService: ThemeService) {}

}
