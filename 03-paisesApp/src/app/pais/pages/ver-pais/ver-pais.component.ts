import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorAlpha( params["id"])),
        tap( console.log )
      ).subscribe( pais => {
        console.log("stop");
        this.pais = pais[0];
      });
    /* this.activatedRoute.params.subscribe( params => {
      this.paisService.getPaisPorAlpha(params['id']).subscribe( pais => {
        console.log(pais);
      })
    }) */



  }

}
