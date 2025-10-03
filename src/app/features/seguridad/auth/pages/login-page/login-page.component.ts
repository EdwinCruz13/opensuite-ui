import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DarkLogo, LightLogo } from '../../../../../core/utils/logo';
import { ThemeService } from './../../../../../core/services/theme.service';
import { AuthService } from '../../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  /**obtener el logo de acuerdo al tema */
  themseServe = inject(ThemeService)
  DarkLogo = DarkLogo.logo;
  LightLogo = LightLogo.logo;

  //usamos formBuilder para formularios reactivos
  fb = inject(FormBuilder);
  loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.nullValidator]]
  });

  /**
   * metodo onsubmit para el login
   */
  onSubmit() {
    if (this.loginForm.valid) {
      const username: string = this.loginForm.value.usuario ?? ""
      const password: string = this.loginForm.value.password ?? ""

      this.authService.postLogin(username, password).subscribe({
      next: (resp) => {
        if (resp) {
          //this.router.navigate(['/']);
        } else {
          console.error("Credenciales incorrectas");
        }
      },
      error: (err) => {
        console.error("Error en el login", err);
      }
    });


    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}



