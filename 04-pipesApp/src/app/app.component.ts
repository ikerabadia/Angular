import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'iker abadia';
  valor: number = 1000;
  obj = {
    nombre: 'iker'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

}
