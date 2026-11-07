import { Component, ElementRef, ViewChild } from '@angular/core';

import { CiberseguridadService, EquipoCiberseguridad } from '../../services/ciberseguridad';

@Component({
  selector: 'app-ciberseguridad',
  standalone: true,
  templateUrl: './ciberseguridad.html',
  styleUrl: './ciberseguridad.css'
})
export class Ciberseguridad {
  @ViewChild('carousel') private carousel?: ElementRef<HTMLElement>;

  readonly equipos: EquipoCiberseguridad[];
  equipoActivoIndex = 0;

  constructor(ciberseguridadService: CiberseguridadService) {
    this.equipos = ciberseguridadService.getAll();
  }

  get equipoActivo(): EquipoCiberseguridad {
    return this.equipos[this.equipoActivoIndex];
  }

  onScroll(event: Event): void {
    const carousel = event.target as HTMLElement;
    const panelWidth = carousel.clientWidth;

    if (panelWidth > 0) {
      this.equipoActivoIndex = Math.min(
        this.equipos.length - 1,
        Math.round(carousel.scrollLeft / panelWidth)
      );
    }
  }

  moverCarrusel(direccion: number): void {
    const siguienteIndex = this.equipoActivoIndex + direccion;

    if (siguienteIndex < 0 || siguienteIndex >= this.equipos.length) {
      return;
    }

    this.equipoActivoIndex = siguienteIndex;
    this.carousel?.nativeElement.scrollTo({
      left: siguienteIndex * this.carousel.nativeElement.clientWidth,
      behavior: 'smooth'
    });
  }
}
