import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dark-toggle',
  imports: [NgClass],
  templateUrl: './dark-toggle.component.html',
})
export class DarkToggleComponent {
//controla el modo oscuro
  constructor(public themeService: ThemeService) {}

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
