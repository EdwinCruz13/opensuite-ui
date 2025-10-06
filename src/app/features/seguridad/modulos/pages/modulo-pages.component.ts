import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../../core/services/modulos.service';
import { Modulo } from '../../../../models/seguridad/modulos/modulo.interface';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulo-pages',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './modulo-pages.component.html',
})
export class ModuloPagesComponent implements OnInit {
    ruta!: string;
    modulos!: Modulo | null;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ruta = params.get('modulos') || '';
      this.moduleService.getModulesByRoute(this.ruta).subscribe(modulos  => {
        this.modulos = modulos
      });
    });
  }
}
