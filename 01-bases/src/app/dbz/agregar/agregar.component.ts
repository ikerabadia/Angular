import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

 

  agregar(){
   if( this.nuevo.nombre.trim().length === 0){
     return;
   }
    this.nuevo = {
     nombre: "",
     poder: 0
    }
  }

}
