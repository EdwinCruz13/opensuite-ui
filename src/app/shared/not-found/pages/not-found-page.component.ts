import { Component } from '@angular/core';
import { DarkLogo } from '../../../core/utils/logo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent { 

    DarkLogo = DarkLogo.logo;
}
