import { Component} from '@angular/core';

import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './Footer.component.html',
})
export class FooterComponent {
  //usar servicio de theme para cambiar el color
  constructor(public themeService: ThemeService) {}
}
