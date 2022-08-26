import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  terminoError: string = "";
  hayError: Boolean = false;
  paises: Country[] = [];


  constructor( private paisService: PaisService ) { }

  buscar(termino:string){
    if (termino == "") {
      this.hayError = false;
      this.paises = [];
      return;
    }
    this.paisService.buscarCapital(termino).subscribe(res => {
      this.paises = res;
      this.hayError = false;
    }, err => {
      this.paises = [];
      this.terminoError = termino;
      this.hayError = true;
    });
  }

  sugerencias(termino:string){
    this.buscar(termino);
  }

}
