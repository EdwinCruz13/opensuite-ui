import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet],
  templateUrl: './content.component.html',
})
export class ContentComponent {
    //usar servicio de theme para cambiar el color
    constructor(public themeService: ThemeService) {}



}
