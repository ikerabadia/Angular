import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = "Hola Mundo";
  terminoError: string = "";
  hayError: Boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar(){
    this.paisService.buscarPais(this.termino).subscribe(resp => {
      this.paises = resp;  
      this.hayError = false;
    }, (err) =>{
      this.terminoError = this.termino;
      this.hayError = true;
    });
  }

}
