import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

 agregar(){
   console.log(this.nuevo);
 }

}
