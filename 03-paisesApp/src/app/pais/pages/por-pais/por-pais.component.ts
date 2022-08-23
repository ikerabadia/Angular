import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{
  
  terminoError: string = "";
  hayError: Boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string){
    this.paisService.buscarPais(termino).subscribe(resp => {
      this.paises = resp;  
      this.hayError = false;
    }, (err) =>{
      this.terminoError = termino;
      this.hayError = true;
    });
  }

  sugerencias(termino: string){
    this.hayError=false
  }

}
