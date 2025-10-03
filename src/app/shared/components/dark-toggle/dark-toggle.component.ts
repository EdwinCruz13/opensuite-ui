import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';


import { ThemeService } from '../../../core/services/theme.service';







@Component({
  selector: 'app-dark-toggle',
  imports: [NgClass],
  templateUrl: './dark-toggle.component.html',
  standalone: true,
})
export class DarkToggleComponent {
  themeService = inject(ThemeService)

  //cambia el modo oscurp
  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }


  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef;
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.dropdownRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
