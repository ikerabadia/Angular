import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: Boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if(region === this.regionActiva) return;
    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(
      (resp) => {
        this.hayError = false;
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
